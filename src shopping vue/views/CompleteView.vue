<script setup>
import Iccon from '../assets/Frame 5 (1).svg';
</script>
<template>
    <div>
        
        <div className="flex flex-col items-center mt-24">
            
            <div className="group border-gray-100/30 flex lg:w-96 max-w-xs flex-col self-center overflow-hidden rounded-lg border  ">
            <img :src=Iccon className=" w-64 ml-8" alt="check" />
            <h2 className='ml-16 font-bold'>Your Order Is Completed! </h2>
            <p className='ml-8 mt-4'>Thank you for your order! Your order is being processed and will be completed within 3-6
                hours. You will receive an email confirmation when your order is completed.
            </p>
           
            </div>
             <button
className="bg-blue-700 text-white border rounded-lg border-white h-12 w-48 mt-8 font-bold hover:border-blue-900">
      <router-link to="/shop">Continue shopping</router-link>
      </button>
        </div>
    </div>
</template>