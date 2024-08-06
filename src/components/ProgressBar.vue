<template>
  <div class="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
    <div 
      class="bg-red-600 h-full transition-all duration-500 ease-in-out"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const progress = ref(50); // Initial progress value, you can change this as needed


</script>

<style scoped>
/* Any additional styling can be added here */
</style>
