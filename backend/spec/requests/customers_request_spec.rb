require 'rails_helper'

RSpec.describe 'Customers', type: :request do
  let(:json) { JSON.parse(response.body) }

  describe 'GET #index' do
    before do
      create_list(:customer, 10)
      get '/customers'
    end

    it { expect(response).to have_http_status(:ok) }

    it { expect(json.length).to eq 10 }
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
end
