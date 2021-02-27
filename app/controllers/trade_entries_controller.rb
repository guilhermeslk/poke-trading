class TradeEntriesController < ApplicationController
  # before_action :set_trade_entry, only: %i[ show edit update destroy ]

  # GET /trade_entries or /trade_entries.json
  def index
    @trade_entries = TradeEntry.all
  end

  # POST /trade_entries or /trade_entries.json
  def create
    @trade_entry = TradeEntry.new(trade_entry_params)

    respond_to do |format|
      if @trade_entry.save
        format.json { render :show, status: :created, location: @trade_entry }
      else
        format.json { render json: @trade_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    #def set_trade_entry
    #  @trade_entry = TradeEntry.find(params[:id])
    #end

    # Only allow a list of trusted parameters through.
    def trade_entry_params
      params.require(:trade_entry).permit(:total_experience_from, :total_experience_to, :pokemons_from, :pokemons_to)
    end
end
