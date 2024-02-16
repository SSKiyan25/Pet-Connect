<script setup lang="ts">
import Navigation from '../src/components/Navigation/top_bar.vue'
import Footer from '../src/components/Footer/FooterComponent.vue'
import {RouterView} from 'vue-router'
</script>

<template>
  <Navigation/>
  <main class="flex items-center justify-center">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
