<script setup>
import { computed, ref } from 'vue';
import {RouterLink} from 'vue-router'
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
const cartItems = computed(() =>cartStore.items);
const total = computed(() =>cartStore.total);
const cartQuantity = computed(() =>cartStore.cartQuantity);
const completeOrder = async () => {
  try{
    await cartStore.clearCart()
  }
  catch(error){
    console.error('Error completing order', error)
  }
}
</script>
<template>

    <section className="mt-24">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h3 className='"mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-700'>
            Checkout
          </h3>

          <div className="form_container">
            <form action="">
              <div className="form_flex">
                <h3 className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-blue-700 sm:text-xl">
                  Contact Information
                </h3>
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a href="#" className="hover:text-blue-600 hover:underline">
                    Login
                  </a>
                </p>
              </div>
              <input
                type="text"
                placeholder="Email or phone number"
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
              />
              <br />
              <input type="checkbox" /> Keep me up to date on news and exclusive
              offers
              <br />
              <h3 className="mt-4 font-bold lg:mb-16 text-center text-gray-500 dark:text-blue-700 sm:text-xl">
                Shipping Address
              </h3>
              <br />
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="First Name"
                  className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
                />
              </div>
              <br />
              <input
                type="text"
                placeholder="Address"
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
              />
              <br />
              <input
                type="text"
                placeholder="Email or phone number"
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
              />
              <br />
              <input
                type="text"
                placeholder="City"
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
              />
              <br />
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="State"
                  className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border-2 border-b-blue-700 shadow-sm  dark:bg-white  dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:shadow-sm-light"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" border-gray-100/30 flex lg:w-72 max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-100  ">
            <div className="cart_total">
              <p className="mt-4 font-bold lg:mb-16 text-center text-gray-500 dark:text-blue-700 sm:text-xl">
                Cart Totals
              </p>
              <div className="total_box">
                <span className="flex flex-row border-2 border-b-black ">
                  <p className="text-xl ml-4">Total Qty:</p>
                  <p className="text-lg ml-36">{{cartQuantity}}</p>
                </span>
                <br />
                <span className="flex flex-row border-2 border-b-black ">
                  <p className="text-xl ml-4">Subtotals:</p>
                  <p className="text-lg  ml-32">$300</p>
                </span>
                <br />
                <span className="flex flex-row justify-between border-2 border-b-black ">
                  <p className="text-xl ml-4">Totals:</p>
                  <p className="text-lg ">${{total + 300}}</p>
                </span>
                <br />
                <div>
                  <input type="checkbox" />I agree to the terms & conditions
                </div>
                <button 
                @click="completeOrder"
                className="bg-green-700 mt-8 text-white border rounded-lg border-white h-12 w-48 font-bold hover:border-blue-900">
                  <RouterLink to="/complete" >
                    Complete your order
                  </RouterLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>


