Rails.application.routes.draw do
  resources :customers, only: %i[index create show] do
    get 'month_search', on: :collection
  end
end
