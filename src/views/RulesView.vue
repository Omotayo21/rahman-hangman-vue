<template>
  <section class="px-10 py-8  bg-opacity-100 bg-[#042372] sm:h-auto md:h-screen lg:h-screen flex flex-col items-center justify-center">
    <header class="flex flex-row sm:mt-2  justify-between md:mb-56 lg:mb-0 ">
      <router-link to="/">
        <button :class="[
      'lg:-ml-[26rem] sm:-ml-[10rem] md:-ml-[26rem] rounded-full bg-gradient-to-b from-[#c904c9] to-[#225beb] shadow-pink-sh hover:bg-gradient-to-b hover:from-[rgba(254,113,254,0.85)] hover:to-[rgba(113,153,255,0.70)]',
       'sm:h-[2rem] sm:p-2 sm:w-[2rem] lg:h-[4rem] lg:w-[4rem] lg:p-4 hover:scale-110 transition-transform duration-300'
    ]">
          <img src="@/assets/icon-back.svg" alt="back icon" />
        </button>
      </router-link>
      <h1 class="lg:text-8xl md:text-8xl sm:text-2xl font-mouse-memoirs font-bold text-transparent bg-gradient-to-b from-blue-400 to-white bg-clip-text">
        How to Play
      </h1>
    </header>
    <div class="grid grid-cols-1 lg:gap-8 sm:gap-4 mt-8 md:grid-cols-3 ">
      <div
        v-for="(rule, index) in rules"
        :key="index"
        class="p-4 font-mouse-memoirs bg-white rounded-md shadow lg:h-[30rem] lg:w-[20rem] flex flex-col lg:gap-y-8  lg:py-8 "
      >
        <div class="lg:text-[4.8rem] font-bold">{{ rule.number }}</div>
        <div class="mt-2 lg:text-[2.3rem] sm:text-[1.8rem]">{{ rule.title }}</div>
        <div class="mt-2  text-[#887dc0]">{{ rule.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        {
          number: "01",
          title: "Pick a category",
          text: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        },
        {
          number: "02",
          title: "Guess letters",
          text: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
        },
        {
          number: "03",
          title: "Win or lose",
          text: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        }
      ]
    };
  }
};
</script>

<style scoped>
/* No additional CSS needed; everything is handled by Tailwind */
</style>
