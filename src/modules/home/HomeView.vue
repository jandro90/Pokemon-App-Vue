<template>
  <div class="container">
    <h1 class="text-center m-5"> Welcome To Pokemon APP </h1>
    <hr>
    <div class="d-flex flex-column justify-content-center">
        <button class="btn btn-primary" @click="getPokemons">
            <span v-if="!isLoadingPokemons"> Go Inside</span>
            <span v-else> ...Loading Data...</span>
        </button>
        <p class="text-center">Press the button to start use this application</p>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";

export default defineComponent({
    name: 'HomeComponent',
    computed: {
        ...mapState('pokemonStore',['pokemons', 'isLoadingPokemons'])
    },
    methods: {
        ...mapActions('pokemonStore',['getPokemons'])
    },
    watch: {
        pokemons() {
             if (this.pokemons.length) this.$router.push({name: 'pokemonHome'})
        }
    }
})
</script>
