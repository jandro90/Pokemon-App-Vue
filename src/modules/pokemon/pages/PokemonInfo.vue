<template>
    <div class="container">
        <div v-if="selectedPokemon">
            <h1 class="text-center m-2">Pokemon Info</h1>
            <hr>
            <div class="row d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="selectedPokemon.sprites.front_default" :alt="selectedPokemon.name">
                    <div class="card-body">
                        <h5 class="card-title"> {{ selectedPokemon.name }} </h5>
                        <button class="btn btn-primary" @click="$router.back()">Go Back</button>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="text-center m-2" v-else> Ooopss!! you need to select a pokemon first, please go to Home page and press in one pokemon</h3>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapState } from "vuex";

export default defineComponent({
    computed: {
        ...mapState('pokemonStore', ['selectedPokemon'])
    }
})
</script>

<style>

</style>