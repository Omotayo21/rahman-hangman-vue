<template>
  <div class="w-full absolute inset-0">
    <img src='@/assets/bg-desktop.svg' alt="Home desktop background" class="sm:hidden md:hidden lg:block w-full h-full object-cover" />
    <img src='@/assets/bg-mobile.svg' alt="Home mobile background" class="lg:hidden md:hidden sm:block w-full h-full object-cover" />
    <img src='@/assets/bg-tab.svg' alt="Home tablet background" class="lg:hidden sm:hidden md:block w-full h-full object-cover" />

    <div class="absolute inset-0 flex flex-col items-center justify-center mb-16">
      <div>
        <img src="@/assets/logo.svg" alt="logo" class="lg:h-96 lg:w-96 lg:-mb-44 sm:-mb-20 sm:ml-8 sm:w-[20rem]" />
        <div class="border-8 border-blue-600 bg-opacity-30 bg-red-400 rounded-[6rem] flex flex-col gap-y-24 items-center justify-center p-20 lg:w-[28rem]">
          <router-link to="/game">
            <button class="p-6 bg-purple-600 rounded-full w-40 hover:scale-110 transition-transform duration-300">
              <img src="@/assets/icon-play.svg" class="h-84 w-40" />
            </button>
          </router-link>
          <router-link to="/rules">
            <button class="font-mouse-memoirs border-4 border-blue-400 bg-blue-800 rounded-[2rem] p-4 text-white w-48 hover:animate-bounce">
              HOW TO PLAY
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  setup() {}
}
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
  animation: bounce 0.5s ease-in-out forwards;
}
</style>
