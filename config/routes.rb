Rails.application.routes.draw do
  resources :trade_entries, only: [:create, :index]

  get "/", to: "home#index"
  get "/pokemons", to: "pokemon#get"
end