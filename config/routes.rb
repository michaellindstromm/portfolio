Rails.application.routes.draw do

  resources :home, only: [:index, :new, :create]
  root      'home#index'
end
