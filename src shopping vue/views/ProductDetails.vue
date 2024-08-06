<!-- src/views/ProductDetails.vue -->
<template>
  <div class="text-center flex flex-col items-center">
    <div class="group mt-36 border-gray-100/30 flex lg:w-96 max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-100">
      <div class="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
        <img class="h-48 object-center sm:w-32 sm:h-24 lg:w-64 lg:h-48" :src="product.productImage" />
      </div>
      <div class="mt-4 px-5 pb-5">
        <h5 class="text-xl tracking-tight text-black">{{ product.productName }}</h5>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <b class="text-4xl font-bold text-black">{{ product.price }}</b>
            <b class="line-through text-sm text-black">$699</b>
          </p>
        </div>
        <p>{{ product.productDescription }}</p><br />
        <button @click="addToCart" class="ml-8 sm:ml-4 hover:border-black/40 flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white">
         Add to cart
        </button>
      </div>
    </div>
    <button class="bg-blue-700 text-white border rounded-lg border-white h-12 w-48 font-bold hover:border-blue-900">
      <RouterLink to="/shop">Continue shopping</RouterLink>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '../products.js'; 
import { useCartStore } from '../stores/cart'; 

import { RouterLink } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
const product = ref({});

const cartStore = useCartStore();

onMounted(() => {
  product.value = products.find(p => p.id === parseInt(productId));
});

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value);
    console.log('addedddd')
    console.log(cartStore)
  }
};
</script>
