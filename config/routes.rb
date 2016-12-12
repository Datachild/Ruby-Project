Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :create, :destroy, :update]
    end
  end
  # resources :players
  root 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
