class HomeController < ApplicationController
  def index
    @pokemons = PokeApiService.new(limit: 10000).list
  end
end
