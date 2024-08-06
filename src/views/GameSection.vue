<template>
  <div class="flex flex-col items-center gap-y-12 font-mouse-memoirs justify-center min-h-screen bg-[#042372]">
    <Header />
   <div class="sm:w-[22rem] md:w-auto">
    <WordContainer :word="currentWord" />
   </div>
    <Keyboard />
    <div v-if="isModalOpen" class="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-opacity-80">
      <Modal />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useMainStore } from '@/store/mainStore';
import Header from '@/components/Header.vue';
import WordContainer from '@/components/WordContainer.vue';
import Keyboard from '@/components/keyboard.vue';
import Modal from '@/components/Modal.vue';
import data from '@/data.json';

const route = useRoute();
const mainStore = useMainStore();
const category = computed(() => route.params.category);

const randomWord = (category) => {
  const words = data.categories[category];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].name;
};

onMounted(() => {
  const word = randomWord(category.value);
  mainStore.setCategory(category.value);
  mainStore.setCurrentWord(word);
});

const currentWord = computed(() => mainStore.currentWord);
const isModalOpen = computed(() => mainStore.isModalOpen);


watch(() => mainStore.gameOver, (newValue) => {
  if (newValue) {
    mainStore.openModal();
  }
});

watch(() => mainStore.gameWon, (newValue) => {
  if (newValue) {
    mainStore.openModal();
  }
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
