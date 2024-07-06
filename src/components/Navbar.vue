<template>
  <nav class="bg-blue-700 fixed top-0 w-full flex justify-between items-center h-20 z-20">
    <!-- Left side links -->
    <div class="my-element">
      <button class="text-white hover:text-gray-300 lg:hidden sm:ml-4 md:hidden" @click="toggleDropdown">
     <span class="pi pi-list text-2xl"></span>
      </button>
    </div>
    
    <div v-if="isOpen" class="lg:hidden">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="items-center mt-60 -mb-5 ml-4 absolute left-0 justify-between gap-5 w-full flex order-1">
          <ul class="flex flex-col p-4 md:p-0 font-medium -ml-4 -mt-9  md:flex-row md:space-x-16 md:mt-0  bg-gray-800 ">
           
            <li>
              <router-link to="/shop" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500">Shop</router-link>
            </li>
            <li>
              <router-link to="/about" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500">About</router-link>
            </li>
            <li>
              <router-link to="/contact" class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 focus:text-blue-500">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="sm:hidden lg:flex md:flex">
      <ul class="flex flex-col ml-8 p-2 sm:mt-64 md:p-0 sm:p-0 order-1 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row sm:flex-row md:space-x-8 sm:space-x-4 md:-ml-28 md:mt-0 md:border-0 md:bg-transparent sm:bg-transparent">
        
        <li>
          <router-link to="/shop" class="block px-3 py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0   focus:text-blue-400" active-class="text-blue-700">Shop</router-link>
        </li>
        <li>
          <router-link to="/about" class="block px-3 py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 focus:text-blue-400" active-class="text-blue-100">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="block px-3 py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0   focus:text-blue-400" active-class="text-blue-100">Contact</router-link>
        </li>
      </ul>
    </div>

    <!-- Right side buttons -->
    <div class="flex justify-center items-center sm:ml-16 lg:-ml-48 md:relative sm:fixed lg:relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="text-black relative bg-dark-blue border-none rounded-md w-full sm:w-40 px-3 py-2"
      />
   
    </div>
    <div v-if="filteredProducts.length > 0" class="sm:ml-20 sm:-mt-4 absolute top-full lg:right-[36rem] md:right-[14.5rem] bg-white border-2 border-y-black">
      <ul>
        <li v-for="product in filteredProducts" :key="product.id" class="p-2">
          <router-link :to="'/products/' + product.id">{{ product.productName }}</router-link>
        </li>
      </ul>
    </div>

    <div class="flex lg:justify-end items-center lg:mr-24 md:mr-12 sm:mr-8 lg:space-x-4 sm:space-x-8 md:space-x-8">
      <button class="text-white bg-blue-700 border-none rounded-md  lg:mr-16">
        <router-link to="/cart">
          <span class="pi pi-shopping-cart text-2xl"></span>
        </router-link>
        <span class="absolute top-0 ml-5 mt-5 bg-red-500 rounded-full w-5 h-5 flex justify-center items-center text-white">
          {{ cartQuantity }}
        </span>
      </button>
      <div v-if="user">
        <button class="text-white bg-dark-blue border-none rounded-md sm:-ml-2" @click="toggleDropdownn">
          <span class="pi pi-user"></span>
        </button>
        <div v-if="isDropdownOpen" class="origin-top-right absolute right-0 mt-8 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-black">
            <div class="font-medium truncate">{{ user.email }}</div>
          </div>
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="handleSignOut">Sign out</a>
          </div>
        </div>
      </div>
      <button v-else class="bg-blue-600 text-white p-2 font-medium rounded-md ml-12" @click="login">login</button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '../stores/cart';
import { products } from '../products'; 
import { authentication } from '../firebase.js'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';

const cartStore = useCartStore();
const cartQuantity = computed(() => cartStore.cartQuantity);
const isOpen = ref(false);
const searchQuery = ref('');

const filteredProducts = computed(() => {
  if (!searchQuery.value) return [];
  return products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const user = ref(null);
const isDropdownOpen = ref(false);

const toggleDropdownn = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleSignOut = async () => {
  try {
    await signOut(authentication);
    user.value = null;
    window.location.reload()
    router.push('/');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

const login = () => {
  router.push('/');
};

const router = useRouter();

onMounted(() => {
  onAuthStateChanged(authentication, (currentUser) => {
    user.value = currentUser ? { email: currentUser.email } : null;
  });
});
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
}
</style>
