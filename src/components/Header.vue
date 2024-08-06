
<template>
    <div class="flex flex-row justify-between lg:gap-96 md:gap-96 md:mt-0 mt-8 sm:gap-16">
        <div class="flex flex-row gap-x-4">
         <button :class="[
      'lg:-ml-[18rem] sm:-ml-[4rem] rounded-full bg-gradient-to-b from-[#c904c9] to-[#225beb] shadow-pink-sh hover:bg-gradient-to-b hover:from-[rgba(254,113,254,0.85)] hover:to-[rgba(113,153,255,0.70)]',
       'sm:h-[2rem] sm:p-2 sm:w-[2rem] lg:h-[4rem] lg:w-[4rem] lg:p-4 hover:scale-110 transition-transform duration-300'
    ]" @click="toggleModal">
          <img src="@/assets/icon-menu.svg" alt="home icon" />
        </button>
         <h1 class="lg:text-6xl sm:text-2xl font-mouse-memoirs font-bold text-transparent bg-gradient-to-b from-blue-400 to-white bg-clip-text mb-20">
        {{ category }}
      </h1>
        </div>
<div class="flex flex-row gap-x-4 lg:mt-2 sm:-mt-2 lg:-mr-64 sm:-mr-20">

     <progress
          max="8"
          :value= "8 - incorrectGuessesMade.length"
          className="lg:h-[1.3rem] lg:mt-2 sm:mt-4 transition-all duration-500 ease-in-out sm:w-[6rem] [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:p-[2px_6px] mobile:[&::-webkit-progress-bar]:p-[2px_3px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-red-600"
        />
    <img src="@/assets/icon-heart.svg" alt="heart" class="h-12 lg:w-12 sm:w-8" />
    </div>
    </div>
    </template>
<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import { useMainStore } from '@/store/mainStore';
import { computed } from 'vue';

const mainStore = useMainStore();

const toggleModal = () => {
  mainStore.toggleModal();
};const category = computed(() => mainStore.currentCategory)
const incorrectGuessesMade = computed(() => mainStore.incorrectGuesses)
</script>