class TradeEntriesController < ApplicationController
  respond_to :json
  before_action :verify_requested_format!
  skip_before_action :verify_authenticity_token

  # GET /trade_entries or /trade_entries.json
  def index
    @trade_entries = TradeEntry.all
    respond_with @trade_entries
  end

  def show
    @trade_entry = TradeEntry.find(params[:id])
    respond_with @trade_entry
  end

  # POST /trade_entries or /trade_entries.json
  def create
    @trade_entry = TradeEntry.new(trade_entry_params)
    @trade_entry.save

    respond_with @trade_entry, status: :created
  end

  private
    def trade_entry_params
      params.require(:trade_entry).permit(:total_experience_from, :total_experience_to, :pokemons_from, :pokemons_to)
    end
end
