<template>
  <div class="flex flex-col items-center justify-center p-4">
    <div class="flex flex-col gap-4">
      <div v-for="(word, wordIndex) in currentWords" :key="wordIndex" class="flex gap-2">
        <input
          v-for="(letter, letterIndex) in word"
          :key="`${wordIndex}-${letterIndex}`"
          type="text"
          maxlength="1"
          class="lg:w-12 sm:w-8 lg:h-24 sm:h-12 rounded-[2rem] bg-blue-900 text-center lg:text-2xl sm:text-base text-white font-bold font-mouse-memoirs border-4 border-blue-500 focus:outline-none"
          :value="isCorrectGuess(letter) ? letter : ''"
          readonly
        />
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/store/mainStore';

const mainStore = useMainStore();
const currentWords = computed(() => mainStore.currentWord.split(' '));
const isCorrectGuess = (letter) => mainStore.correctGuesses.includes(letter);
</script>


