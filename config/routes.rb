Rails.application.routes.draw do
  root 'application#index'
  get '/users/:id/list' => 'lists#show'
  post '/users/lists' => 'lists#create'
  post '/users/:id/list' => 'items#create'
  post '/users/:id/delete' => 'items#delete'
  get '/api/users' => 'users#index'
  post '/api/users' => 'users#create'
  get '*path' => 'application#index'
end
