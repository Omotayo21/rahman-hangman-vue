

<template>
<div>
     <Head />
      <div className="grid sm:grid-cols-2 md:space-x-4 lg:mt-2 sm:mt-2 sm:gap-4 lg:grid-cols-4 lg:gap-4 lg:ml-12">
      
          <Products  v-for="product in products"
        :key="product.id" :product="product" />
     
      </div>
      <br />
    </div>

</template>
<script setup>
import Head from '../components/Head.vue';
import {ref} from 'vue';

import Products from '../components/Products.vue';
import {products} from '../products.js';

const productsRef = ref(products)

</script>