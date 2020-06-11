Rails.application.routes.draw do
  root "groups#index"
  resources :users, only:[:edit,:update]
  resources :groups,only:[:index,:new,:create,:edit,:update]
  devise_for :users

end
