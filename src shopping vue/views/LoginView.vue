<template>
  <section class=" mt-12">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto sm:max-w-md md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0 border-blue-700">
        <div class="p-6 space-y-4 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-700 sm:text-2xl">
            Sign in to your account
          </h1>
          <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
            <div>
              <label for="email" class=" text-start block mb-2 text-sm font-medium text-blue-700">
                Your email
              </label>
              <input
                v-model="email"
                type="email"
                name="email"
                placeholder="name@mail.com"
                :class="[
                  'bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5',
                  emailError ? 'border-red-500' : 'border-blue-300'
                ]"
              />
              <p v-if="emailError" class="text-red-500 text-xs mt-2">Must be a valid email</p>
            </div>
            <div>
              <label for="password" class="text-start block mb-2 text-sm font-medium text-blue-700">
                Password
              </label>
              <input
                v-model="password"
                type="password"
                name="password"
                placeholder="at least 8 characters long"
                :class="[
                  'bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5',
                  passwordError ? 'border-red-500' : 'border-blue-300'
                ]"
              />
              <p v-if="passwordError" class="text-red-500 text-xs mt-2">Password must be more than 8 characters</p>
            </div>
            <div class="flex items-center justify-between">
              <a @click="handlePasswordReset" class="text-sm font-medium text-blue-700 hover:underline cursor-pointer">Forgot password?</a>
            </div>
            <button
              type="submit"
              :class="['w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center', 
                {'bg-blue-700': !isLoading, 'bg-gray-400 cursor-not-allowed': isLoading}
              ]"
            >
            {{  isLoading ? 'Authenticating...' : 'Login' }}
            </button>
            <button
              @click="handleGoogleSignIn"
              type="button"
               class="w-full text-white bg-blue-700 font-medium rounded-lg py-2.5 px-5 text-center flex flex-row justify-center items-center"
            >
              Sign in with Google account <span class="pi pi-google ml-3 mt-1"></span>
            </button>
            <p class="text-sm font-light text-black-500">
              Don't have an account yet?
              <RouterLink to="/signup" class="font-medium text-blue-600 hover:underline">Sign up</RouterLink>
            </p>
          </form>
          <p v-if="message" :class="[messageType === 'error' ? 'bg-red-500' : 'bg-green-500', 'text-white text-sm p-2 mt-4 rounded-lg']">
            {{ message }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { authentication } from '../firebase.js';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
    import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const router = useRouter()
const email = ref('');
const password = ref('');
const emailError = ref(false);
const passwordError = ref(false);
const message = ref('');
const messageType = ref('');
const isLoading = ref(false)

const validateEmail = (email) => {
  const regex = /^[\w-\.]+@(gmail\.com|yahoo\.com)$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

const showMessage = (msg, type) => {
  message.value = msg;
  messageType.value = type;
  setTimeout(() => {
    message.value = '';
  }, 3000);
};

const handleSubmit = async () => {
  emailError.value = !validateEmail(email.value);
  passwordError.value = !validatePassword(password.value);

  if (!emailError.value && !passwordError.value) {
    isLoading.value = true;
    try {
      const userCredential = await signInWithEmailAndPassword(authentication, email.value, password.value);
      const user = userCredential.user; 
      cartStore.setUserId(user.uid); 
      await cartStore.fetchUserData();
      await cartStore.fetchCartItems();
      router.push('/shop');
    } catch (error) {
    //  showMessage('Incorrect email or password', 'error');
      console.log(error);
      showMessage(error, 'error')
    } finally {
      isLoading.value = false;
    }
  } else {
    showMessage('Please fix the errors in the form', 'error');
  }
};


const handlePasswordReset = async () => {
  emailError.value = !validateEmail(email.value);

  if (!emailError.value) {
    try {
      await sendPasswordResetEmail(authentication, email.value);
      showMessage('Reset password mail sent successfully', 'success');
    } catch (error) {
      showMessage('Error sending reset email', 'error');
    }
  } else {
    showMessage('Please enter a valid email', 'error');
  }
};
const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(authentication, googleProvider);
    const user = result.user;
    cartStore.setUserId(user.uid);
    await cartStore.fetchUserData();
    await cartStore.fetchCartItems();
    router.push('/shop');
  } catch (error) {
    showMessage('Google sign-in failed', 'error');
    console.log(error);
  }
};
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
}
.bg-green-500 {
  background-color: #48bb78;
}
.bg-red-500 {
  background-color: #f56565;
}
</style>





