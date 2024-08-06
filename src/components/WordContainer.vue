<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div class="flex flex-wrap gap-2">
      <template v-for="(letter, index) in currentWord">
        <input
          v-if="letter !== ' '"
          :key="index"
          type="text"
          maxlength="1"
          class="lg:w-12 sm:w-8 lg:h-24 sm:h-12 rounded-[2rem] bg-blue-900 text-center lg:text-2xl sm:text-base text-white font-bold font-mouse-memoirs border-4 border-blue-500 focus:outline-none"
          :value="isCorrectGuess(letter) ? letter : ''"
          readonly
        />
        <div
          v-else
          :key="'space-' + index"
          class="lg:w-12 sm:w-8 lg:h-24 sm:h-12"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/store/mainStore';

const mainStore = useMainStore();
const currentWord = computed(() => mainStore.currentWord);
const isCorrectGuess = (letter) => mainStore.correctGuesses.includes(letter);
</script>

<style scoped>
/* Add any additional styling here */
</style>
