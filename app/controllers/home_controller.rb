class HomeController < ApplicationController
    def index
        @pokemons = PokeApiService.new().list
        @trade_entries = TradeEntry.all
    end
end
