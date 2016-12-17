Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :show, :create, :destroy, :update]
      resources :goals, only: [:index, :show, :create, :destroy, :update]
    end
  end

  get '/site/', to: 'site#show'
  # resources :players
  # root 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
