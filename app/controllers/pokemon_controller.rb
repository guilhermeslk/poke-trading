class PokemonController < ApplicationController
    def index
    end

    def get
        @pokemon = PokeApiService.new.get(name: params[:name])
        render json: @pokemon
    end
end
