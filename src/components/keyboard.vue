<template>
  <div class="keyboard font-mouse-memoirs grid lg:grid-cols-10 gap-2 text-blue-900 p-4 sm:grid-cols-5 sm:gap-2 md:grid-cols-8 md:gap-2">
    <button
      v-for="key in keys"
      :key="key"
      @click="handleKeyClick(key)"
      :disabled="isKeyDisabled(key)"
      :class="buttonClass(key)"
      class="key-button text-xl w-24 font-mouse-memoirs font-bold h-16 sm:rounded-[1rem] lg:rounded-md flex items-center justify-center  text-blue-900 focus:outline-none sm:w-12 sm:h-12 sm:text-base md:w-20 md:h-16 md:text-lg"
    >
      {{ key }}
    </button>
  </div>
  
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useMainStore } from '@/store/mainStore';

const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const mainStore = useMainStore();

const isKeyDisabled = (key) =>
  mainStore.correctGuesses.includes(key) || mainStore.incorrectGuesses.includes(key);

const handleKeyClick = (key) => {
  if (mainStore.currentWord.includes(key)) {
    mainStore.addCorrectGuess(key);
  } else {
    mainStore.addIncorrectGuess(key);
  }
};

const handleKeyDown = (event) => {
  const key = event.key.toUpperCase();
  if (keys.includes(key) && !isKeyDisabled(key)) {
    handleKeyClick(key);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const buttonClass = (key) => {
  if (mainStore.correctGuesses.includes(key)) {
    return 'bg-green-500 text-white cursor-not-allowed';
  } else if (mainStore.incorrectGuesses.includes(key)) {
    return 'bg-red-500 text-white cursor-not-allowed';
  }
  return 'bg-white text-blue-900 hover:bg-gray-400';
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
