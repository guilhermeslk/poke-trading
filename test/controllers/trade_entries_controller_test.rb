require "test_helper"

class TradeEntriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trade_entry = trade_entries(:one)
  end

  test "should get index" do
    get trade_entries_url
    assert_response :success
  end

  test "should get new" do
    get new_trade_entry_url
    assert_response :success
  end

  test "should create trade_entry" do
    assert_difference('TradeEntry.count') do
      post trade_entries_url, params: { trade_entry: { pokemons_from: @trade_entry.pokemons_from, pokemons_to: @trade_entry.pokemons_to, total_experience_from: @trade_entry.total_experience_from, total_experience_to: @trade_entry.total_experience_to } }
    end

    assert_redirected_to trade_entry_url(TradeEntry.last)
  end

  test "should show trade_entry" do
    get trade_entry_url(@trade_entry)
    assert_response :success
  end

  test "should get edit" do
    get edit_trade_entry_url(@trade_entry)
    assert_response :success
  end

  test "should update trade_entry" do
    patch trade_entry_url(@trade_entry), params: { trade_entry: { pokemons_from: @trade_entry.pokemons_from, pokemons_to: @trade_entry.pokemons_to, total_experience_from: @trade_entry.total_experience_from, total_experience_to: @trade_entry.total_experience_to } }
    assert_redirected_to trade_entry_url(@trade_entry)
  end

  test "should destroy trade_entry" do
    assert_difference('TradeEntry.count', -1) do
      delete trade_entry_url(@trade_entry)
    end

    assert_redirected_to trade_entries_url
  end
end
