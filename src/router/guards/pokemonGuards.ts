import store from "@/store";


export const pokemonGuard = ({name}: any) => {
    const { pokemonStore } = store.state as any;
    
    if (name === 'pokemonHome') {
       return pokemonStore.pokemons ? true : false
    }

    if (name === 'pokemonInfo') {
        return pokemonStore.selectedPokemon ? true : false
    }

    else {
        console.log('entro')
        return false
    }
}