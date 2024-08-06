<template>
  <section class="bg-white h-full mt-12">
    <div class="flex flex-col items-center justify-center">
      <div class="w-full bg-white-200 rounded-lg shadow border mt-2 sm:max-w-md xl:p-0 border-blue-700">
        <div class="p-6 space-y-4 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-blue-900 sm:text-2xl">
            Create an account
          </h1>
          <form @submit.prevent="handleSubmit" class="space-y-4 sm:space-y-6">
            <div>
              <label class="block text-start mb-2 text-sm font-medium text-blue-700">Your email</label>
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
              <label class=" text-start block mb-2 text-sm font-medium text-blue-700">Password</label>
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
            <div>
              <label class="text-start block mb-2 text-sm font-medium text-blue-700">Confirm Password</label>
              <input
                v-model="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="at least 8 characters long"
                :class="[
                  'bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full p-2.5',
                  confirmPasswordError ? 'border-red-500' : 'border-blue-300'
                ]"
              />
              <p v-if="confirmPasswordError" class="text-red-500 text-xs mt-2">Passwords must match</p>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  v-model="termsAccepted"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-blue-800">
                  I accept the
                  <a class="font-medium text-blue-800 hover:underline" href="#">Terms and Conditions</a>
                </label>
              </div>
            </div>
            <p v-if="termsError" class="text-red-500 text-xs mt-2">You must accept the terms and conditions</p>
            <button
              type="submit"
             :class="['w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center', 
                {'bg-blue-700': !isLoading, 'bg-gray-400 cursor-not-allowed': isLoading}
              ]"
            >
             {{ isLoading ? 'Signing up' : 'Create an account'  }}
            </button>
            <button
            @click="handleGoogleSignUp"
              type="button"
              class="w-full text-white bg-blue-700 font-medium rounded-lg py-2.5 px-5 text-center flex flex-row justify-center items-center"
            >
              Sign up with Google account<span class="pi pi-google ml-3 "></span>
            </button>
            <p class="text-sm font-light text-black-500">
              Already have an account?
              <RouterLink to="/" class="font-medium text-blue-500 hover:underline">Login here</RouterLink>
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
import { RouterLink } from 'vue-router';
import { authentication, googleProvider } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { notify } from '@kyvg/vue3-notification';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const termsAccepted = ref(false);
const message = ref('');
const emailError = ref(false);
const passwordError = ref(false);
const confirmPasswordError = ref(false);
const termsError = ref(false);
const router = useRouter()
const isLoading = ref(false)
const messageType = ref('');

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
  confirmPasswordError.value = password.value !== confirmPassword.value;
  termsError.value = !termsAccepted.value;

  if (!emailError.value && !passwordError.value && !confirmPasswordError.value && termsAccepted.value) {
    isLoading.value = true
    try {
      await createUserWithEmailAndPassword(authentication, email.value, password.value);
   showMessage('acc created successfully', 'success');
    notify({
        title: 'Success',
        text: 'Account created successfully',
        type: 'success',
        duration: 2000
      })
  router.push('/')
    } catch (error) {
      console.error('Error creating account:', error.message);
      showMessage('Error creating account: ' + error.message);
    } finally {
      isLoading.value = false
    }
  } else {
    // handle error state here
    showMessage('Please fix the errors in the form');
  }
};
const handleGoogleSignUp = async () => {
  try {
    const result = await signInWithPopup(authentication, googleProvider);
    const user = result.user;
    cartStore.setUserId(user.uid);
    await cartStore.fetchUserData();
    await cartStore.fetchCartItems();
    router.push('/shop');
  } catch (error) {
    showMessage('Google sign-up failed', 'error');
    console.log(error);
  }
};
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
}
</style>
