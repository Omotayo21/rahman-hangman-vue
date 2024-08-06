<template>
  <div v-if="isModalOpen" class="fixed left-0 top-0 z-[9999] flex h-full w-full  items-center justify-center bg-opacity-80 bg-black">
    <div class="border-8 border-blue-600 bg-opacity-30 bg-red-400 rounded-[6rem] flex flex-col gap-y-12 items-center justify-center p-20 lg:w-[28rem] sm:w-[20rem] md:w-[24rem]">
      <h1
        class="text-8xl font-bold text-transparent font-mouse-memoir bg-gradient-to-b from-blue-400 to-white bg-clip-text -mb-8 relative"
      >
        {{ gameWon ? 'YOU WIN' : (gameOver ? 'YOU LOSE' : 'PAUSED') }}
      </h1>
 <div v-if="gameOver" class="text-white text-2xl mb-4">The correct answer was: {{ correctAnswer }}</div>
      <button
        v-if="gameWon || gameOver"
        @click="playAgain"
        class="border-4 border-blue-400 bg-blue-800 rounded-[2rem] p-4 text-white w-48"
      >
        PLAY AGAIN
      </button>
      <button
        v-if="!gameWon && !gameOver"
        @click="closeModal"
        class="border-4 border-blue-400 bg-blue-800 rounded-[2rem] p-4 text-white w-48"
      >
        CONTINUE
      </button>
      <router-link to="/game">
        <button
          @click="closeModal"
          class="border-4 border-blue-400 bg-blue-800 rounded-[2rem] p-4 text-white w-48"
        >
          NEW CATEGORY
        </button>
      </router-link>
      <router-link to="/">
        <button @click="closeModal" class="bg-red-800 rounded-[2rem] p-4 text-white w-48">
          QUIT GAME
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/store/mainStore';
import { useRouter } from 'vue-router';

const mainStore = useMainStore();
const isModalOpen = computed(() => mainStore.isModalOpen);
const gameWon = computed(() => mainStore.gameWon);
const gameOver = computed(() => mainStore.gameOver);
const correctAnswer = computed(() => mainStore.correctAnswer);
const router = useRouter()
const closeModal = () => {
  mainStore.closeModal();
};

const playAgain = () => {
  mainStore.setCurrentWord(''); // Optionally reset game or set a new word
  closeModal();
  router.push('/game');
};
</script>
