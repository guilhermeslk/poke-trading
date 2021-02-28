class PokemonController < ApplicationController
  def get
    @pokemon = PokeApiService.new.get(name: params[:name])
    render json: @pokemon
  end
end
