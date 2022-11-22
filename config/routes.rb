Rails.application.routes.draw do
  resources :greetings
  root 'message#index'
  
end
