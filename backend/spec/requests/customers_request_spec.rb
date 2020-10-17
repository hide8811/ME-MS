require 'rails_helper'

RSpec.describe 'Customers', type: :request do
  describe 'GET #index' do
    it 'リクエストが成功すること' do
      get '/customers'
      expect(response).to have_http_status(:success)
    end

    it '全てのcustomersテーブルのデータを取得できていること' do
      create_list(:customer, 10)

      get '/customers'
      json = JSON.parse(response.body)

      expect(json.length).to eq 10
    end
  end

  describe 'GET /create' do
    it 'returns http success' do
      get '/customers/create'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      get '/customers/show'
      expect(response).to have_http_status(:success)
    end
  end
end
