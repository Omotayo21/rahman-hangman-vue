<template>
  <div class="text-center flex flex-col items-center jago">
    <div v-if="!userId" class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-black font-bold text-4xl">Please login to view cart</h1>
    </div>
    <div v-else>
      <h2 class="mt-36 text-black text-center font-bold text-4xl">Your cart items</h2>
      <div class="cart-items">
        <CartItem v-for="product in cartItems" :product="product" :key="product.id" />
      </div>
      <div v-if="total > 0">
        <div class="border-gray-100/30 flex lg:w-72 max-w-xs flex-col lg:ml-16 sm:ml-12 self-center overflow-hidden rounded-lg border bg-gray-100">
          <div class="cart_total ">
            <p class="mt-4 font-bold lg:mb-16 text-center text-blue-500 sm:text-xl">Cart Totals</p>
            <span class="flex flex-row border-2 border-b-black">
              <p class="text-xl ml-4">Total Qty:</p>
              <p class="text-lg ml-36">{{ cartQuantity }}</p>
            </span>
            <br />
            <span class="flex flex-row justify-between border-2 border-b-black">
              <p class="text-xl ml-4">Totals:</p>
              <p class="text-lg ml-32">${{ total }}</p>
            </span>
            <br />
          </div>
        </div>
        <br />
        <div class="inline-block ml-4">
          <button class="bg-blue-700 h-16 text-white p-2 border rounded-lg border-white sm:w-36 lg:w-48 lg:font-bold hover:border-blue-900">
            <RouterLink to="/shop">Continue shopping</RouterLink>
          </button>
          <button class="bg-green-700 text-white ml-8 p-2 border rounded-lg border-white h-16 lg:w-48 sm:w-40 lg:font-bold hover:border-green-900">
            <RouterLink to="/checkout">Proceed to checkout</RouterLink>
          </button>
        </div>
      </div>
      <div v-else>
        <img :src="empty" class="w-96" />
        <h1 class="mt-16 text-black text-center font-bold text-4xl">Your cart is Empty</h1>
        <br />
        <button class="bg-blue-700 lg:-ml-8 text-white border rounded-lg border-white h-12 w-48 font-bold hover:border-blue-900">
          <RouterLink to="/shop">Go shopping</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';
import CartItem from '../components/CartItems.vue';
import empty from '../assets/mtcart.png';
import { RouterLink } from 'vue-router';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);
const total = computed(() => cartStore.total);
const cartQuantity = computed(() => cartStore.cartQuantity);
const userId = computed(() => cartStore.userId);
</script>


