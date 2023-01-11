<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{name: 'home'}">
            <span class="navbar-brand p-2">Pokemon App</span>
        </router-link>
        <div>
            <div class="navbar-nav">
                <router-link :to="{name: 'pokemonHome'}" v-slot="{ isActive, href, navigate }">
                    <a :class="isActive ? 'nav-item nav-link active' : 'nav-item nav-link'" :href="href" @click="navigate">Home</a>
                </router-link>

            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'NavBar',
})
</script>

<style scoped>
</style>