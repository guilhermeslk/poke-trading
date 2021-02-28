class PokeApiService
  include HTTParty
  base_uri "pokeapi.co"

  def initialize(limit:, offset: 0)
    @options = { limit: limit, offset: offset }
  end

  def list
    response = self.class.get("/api/v2/pokemon", query: @options)
    parsed_results(response)
  end

  def get(name:)
    response = self.class.get("/api/v2/pokemon/#{name}")
    parsed_result(response)
  end

  private

  def parsed_result(response)
    response.parsed_response || {}
  end

  def parsed_results(response)
    data = response.parsed_response["results"] || []
  end
end
