<template>
  <div class="flex flex-col items-center bg-[#02050c] justify-center min-h-screen">
    <div class="flex flex-row">
      <router-link to="/">
        <button
          :class="[
            'lg:-ml-[18rem] sm:-ml-[8rem] rounded-full bg-gradient-to-b from-[#c904c9] to-[#225beb] shadow-pink-sh hover:bg-gradient-to-b hover:from-[rgba(254,113,254,0.85)] hover:to-[rgba(113,153,255,0.70)]',
            'sm:h-[2rem] sm:p-2 sm:w-[2rem] lg:h-[4rem] lg:w-[4rem] lg:p-4 hover:scale-110 transition-transform duration-300',
            
          ]"
        >
          <img src="@/assets/icon-back.svg" alt="back icon" />
        </button>
      </router-link>
      <h1 class="lg:text-8xl sm:text-4xl font-mouse-memoirs font-bold text-transparent bg-gradient-to-b from-blue-400 to-white bg-clip-text mb-20">
        PICK A CATEGORY
      </h1>
    </div>
    <div class="flex flex-row items-center justify-center">
      <ul class="lg:grid lg:grid-cols-3 gap-x-48 sm:flex-col sm:flex gap-y-8 sm:gap-y-4">
        <li v-for="(category, index) in categories" :key="index">
          <router-link
            :to="`/game/${category}`"
            @click="selectWordFromCategory(category)"
            class="block font-mouse-memoirs uppercase border-4 border-blue-500 rounded-[2rem] bg-blue-900 lg:h-36 sm:h-16 w-[17rem] sm:text-center sm:p-4 text-white lg:text-center hover:bg-blue-500 hover:animate-bounce text-2xl lg:p-12"
          >
            {{ category }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import data from '@/data.json';
import { useMainStore } from '@/store/mainStore';

const categories = ref(Object.keys(data.categories));
const mainStore = useMainStore();

const selectWordFromCategory = (category) => {
  const words = data.categories[category];
  const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  mainStore.setCurrentWord(randomWord);
};
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hover\\:animate-bounce:hover {
  animation: bounce 0.3s ease-in-out forwards;
}
</style>
