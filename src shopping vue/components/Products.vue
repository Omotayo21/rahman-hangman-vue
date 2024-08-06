
<template>
 <div>
      <div className="grid justify-center">
        <div className="group border-gray-100/30 flex lg:w-64 sm:w-48 max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-100 shadow hover:shadow-2xl hover:shadow-black ">
          <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"></div>
        <RouterLink 
       
        :to="'/products/' + product.id"
       >
            <div className="h-40 object-cover pl-12 sm:w-32  sm:h-24 lg:w-48 lg:h-48">
              <img className=" lg:h-36" :src="product.productImage" />
            </div>
        </RouterLink>
          <div className="lg:-mt-8 sm:mt-2 px-5 pb-5">
            <h5 className="text-lg tracking-tight text-black">{{ product.productName }}</h5>

            <div className="mt-1 mb-2 flex items-center justify-between">
              <p>
                <b className="lg:text-4xl sm:text-2xl font-bold text-black">
                  ${{ product.price }}
                </b>
                <b className="line-through text-sm text-black  rahman">$699</b>
              </p>
            </div>
            <button
             @click="addToCart"

              className="ml-8 sm:ml-4 flex flex-row gap-x-2 hover:border-black/40 items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-2.5 text-center text-sm font-medium sm:h-12 text-white focus:ring-blue-300"
            >
           
              <span class="pi pi-shopping-cart text-lg"></span>Add to cart({{ productQuantity(product.id) }})
            </button>
            <p className="text-xs">*Click product image for more details</p>
          </div>
        </div>
      </div>
    </div>

</template>
<script setup>
import { useCartStore } from '../stores/cart';
import { ref, defineProps } from 'vue';


const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.product);
    
};

const productQuantity = (productId) => {
  const product = cartStore.items.find(item => item.id === productId);
  return product ? product.quantity : 0;
};

</script>