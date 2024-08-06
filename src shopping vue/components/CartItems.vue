<template>
  <div
    class="lg:w-84 sm:w-84 h-48 m-8 flex shadow shadow-black hover:shadow-xl p-6 bg-white border border-gray-200"
  >
    <div class="w-28 object-fill">
      <img :src="product.productImage" class="h-24" />
    </div>
    <div class="ml-16">
      <p>
        <b>{{ product.productName }}</b>
      </p>
      <p>${{ product.price }}</p>
      <div class="flex flex-row ml-5">
        <button class="w-4 text-black bg-gray-600" @click="decrementQuantity(product.id)">-</button>
        <p class="w-8 text-center font-bold bg-gray-200">{{ product.quantity }}</p>
        <button class="w-4 text-black bg-gray-600" @click="incrementQuantity">+</button>
      </div>
      <button
        class="bg-red-700 text-white font-bold mt-4 border rounded-md w-24"
        @click="removeFromCart"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: Object
})

const cartStore = useCartStore()

const incrementQuantity = () => {
  cartStore.incrementItem(props.product.id)
}

const decrementQuantity = () => {

  cartStore.decrementItem(props.product.id)
}

const removeFromCart = () => {
  cartStore.removeFromCart(props.product.id)
}
</script>
