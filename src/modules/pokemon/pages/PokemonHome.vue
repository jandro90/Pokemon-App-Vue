<template>
  <div class="container">
    <h1 class="text-center"> Pokemons </h1>
    <h2 v-if="isLoadingPokemons">...Loading Data....</h2>
    <hr>
    
    <button class="btn btn-primary m-2" @click="getPokemon(pokemon.url)" v-for="pokemon in pokemons" :key="pokemon.name"> {{pokemon.name}}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  computed: {
    ...mapState('pokemonStore',['pokemons','isLoadingPokemons', 'selectedPokemon'])
  },
  methods: {
    ...mapActions('pokemonStore', ['getPokemon'])
  },
  watch: {
    selectedPokemon() {
      this.$router.push({name: 'pokemonInfo'})
    }
  }
})
</script>

<style>

</style>