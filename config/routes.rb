Rails.application.routes.draw do
  root 'application#index'
  get '/api/users' => 'users#index'
  post '/api/users' => 'users#create'
  get '*path' => 'application#index'
end
