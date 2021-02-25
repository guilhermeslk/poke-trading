class HomeController < ApplicationController
    def index
        @pokemons = PokeApiService.new().list
    end
end
