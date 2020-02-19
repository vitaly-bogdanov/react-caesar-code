Rails.application.routes.draw do
  root 'pages#index'

  post   '/user',           to: 'users#create'

  get    '/authentication', to: 'sessions#check_login'
  post   '/authentication', to: 'sessions#login'
  delete '/authentication', to: 'sessions#logout'

  post   '/decryption',     to: 'ciphers#decryption'
  post   '/encryption',     to: 'ciphers#encryption'
  delete '/destroy/:id',    to: 'ciphers#destroy'

  match '*path',            to: 'pages#index', via: :all
end
