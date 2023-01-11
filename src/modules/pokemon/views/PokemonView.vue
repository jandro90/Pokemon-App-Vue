<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import NavBar from "../components/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  name: 'PokemonView',
})
</script>

<style>

</style>