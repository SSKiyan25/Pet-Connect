<script setup lang="ts">
  import Dashboard from '../components/DashboardComponent.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })

  
</script>

<template>
  <main>
    <Dashboard />
  </main>
</template>