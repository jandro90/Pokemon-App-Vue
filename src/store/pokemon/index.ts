const pokemonStore =  {
  namespaced: true,
  state: () => ({ 
    pokemons: null,
    isLoadingPokemons: false,
    numberOfPokemonsToShow: 150,
    selectedPokemon: null,
  }),
  mutations: {
    setPokemons (state: any, pokemons: any) {
      state.pokemons = pokemons;
    },
    setLoadingPokemons(state: any, value: boolean) {
      state.isLoadingPokemons = value;
    },
    setSelectedPokemon(state: any, value: any) {
      state.selectedPokemon = value;
    },
  },
  actions: {
    async getPokemons({commit}: any) {
      commit('setLoadingPokemons', true);
      const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`);
      const { results }: any = await response.json();
      commit('setPokemons', results);
      commit('setLoadingPokemons', false);
    },

    async getPokemon({commit}: any, url: string) {
      commit('setLoadingPokemons', true);
      const response: Response = await fetch(url);
      const data = await response.json();
      commit('setSelectedPokemon', data);
      commit('setLoadingPokemons', false);
    }
    
  },
  getters: {
    // TODO, complete with custom getters in case u need
  },
};

export default pokemonStore;