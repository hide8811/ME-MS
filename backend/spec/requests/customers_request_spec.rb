require 'rails_helper'

RSpec.describe 'Customers', type: :request do
  let(:json) { JSON.parse(response.body) }

  describe 'GET #index' do
    let!(:customers_a) { create_list(:customer, 5, date: Faker::Date.between(from: '2020-01-01', to: '2020-01-31')) }
    let!(:customers_b) { create_list(:customer, 6, date: Faker::Date.between(from: '2020-02-01', to: '2020-02-28')) }
    let!(:customer) { create(:customer, date: Faker::Date.between(from: '2019-01-01', to: '2019-01-31')) }
    before { get '/customers', params: { year: '2020' } }

    it { expect(response).to have_http_status(:ok) }

    context 'データがある場合' do
      context 'json["January"]' do
        subject { json['January'].map { |j| j['id'] } }

        it { expect(json['January'].length).to eq 5 }

        it { is_expected.to eq(customers_a.map { |c| c['id'] }) }

        it { is_expected.not_to include(customers_b.map { |c| c['id'] }) }

        it { is_expected.not_to include customer.id }
      end

      context 'json["February"]' do
        subject { json['February'].map { |j| j['id'] } }

        it { expect(json['February'].length).to eq 6 }

        it { is_expected.to eq(customers_b.map { |c| c['id'] }) }

        it { is_expected.not_to include(customers_b.map { |c| c['id'] }) }
      end
    end

    context 'データがない場合' do
      context 'json["March"]' do
        it { expect(json['March'].length).to eq 0 }

        it { expect(json['March']).to eq [] }
      end
    end
  end

  describe 'POST #create' do
    subject { post '/customers', params: { customer: attrs } }

    context 'パラメータが正当な場合' do
      let(:attrs) { attributes_for(:customer) }

      it { expect { subject }.to change { Customer.count }.by(+1) }

      it '登録成功のステータスコードを返すこと' do
        subject
        expect(response).to have_http_status(:created)
      end
    end

    context 'パラメータが不正な場合' do
      let(:attrs) { attributes_for(:customer, age: '') }

      it { expect { subject }.to change { Customer.count }.by(0) }

      it '登録失敗のステータスコードを返すこと' do
        subject
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'GET #show' do
    let(:customer) { create(:customer) }
    before { get "/customers/#{customer.id}" }

    it { expect(response).to have_http_status(:ok) }

    it { expect(json['age']).to eq customer.age }
  end

  describe 'GET #month_search' do
    let!(:customers) { create_list(:customer, 10, date: Faker::Date.between(from: '2020-01-01', to: '2020-01-31')) }
    let!(:customer) { create(:customer, date: Faker::Date.between(from: '2020-02-01', to: '2020-02-28')) }
    before { get '/customers/month_search', params: { month: '2020-1' } }
    subject { json.map { |j| j['id'] } }

    it { expect(response).to have_http_status(:ok) }

    it { expect(json.length).to eq 10 }

    it { is_expected.to eq(customers.map { |c| c['id'] }) }

    it { is_expected.not_to include customer.id }
  end
end
