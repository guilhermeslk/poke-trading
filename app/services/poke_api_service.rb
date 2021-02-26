class PokeApiService
    include HTTParty
    base_uri 'pokeapi.co'

    def initialize()
        @options = {limit: 100}
    end
    
    def list
        response = self.class.get("/api/v2/pokemon", @options)
        parsed_results(response)
    end

    def get(name: name)
        response = self.class.get("/api/v2/pokemon/#{name}", @options)
        parsed_result(response)
    end

    private

    def parsed_result(response)
        response.parsed_response || {}
    end

    def parsed_results(response)
        data = response.parsed_response['results'] || []
    end
end