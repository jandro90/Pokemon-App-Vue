import { createStore } from 'vuex';
import pokemonStore from './pokemon';

export default createStore({
    modules: {
      pokemonStore,
  }
});
