Rails.application.routes.draw do
  root 'pages#index'

  post   '/user',           to: 'users#create'

  get    '/authentication', to: 'sessions#check_login'
  post   '/authentication', to: 'sessions#login'
  delete '/authentication', to: 'sessions#logout'

  get    '/ciphers',        to: 'ciphers#index'
  post   '/decryption',     to: 'ciphers#decryption'
  post   '/encryption',     to: 'ciphers#encryption'

  match '*path',            to: 'pages#index', via: :all
end
