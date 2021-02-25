class PokeApiService
    include HTTParty
    base_uri 'pokeapi.co'

    def initialize()
        @options = {}
    end
    
    def list
        response = self.class.get("/api/v2/pokemon", @options)
        parsed_results(response)
    end

    private

    def parsed_results(response)
        response.parsed_response['results'] || []
    end
end