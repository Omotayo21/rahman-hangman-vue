<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
    <Footer v-if="showNavbar" />
    <notifications v-if="showNavbar" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';
import { useCartStore } from './stores/cart';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './firebase'; // Adjust the path to your firebase.js file
import { Notifications } from '@kyvg/vue3-notification';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Loading,
    Notifications
  },
  setup() {
    const route = useRoute();
    const showNavbar = computed(() => !['/', '/signup'].includes(route.path));
    const cartStore = useCartStore();

    onMounted(() => {
      onAuthStateChanged(authentication, async (user) => {
        if (user) {
          cartStore.setUserId(user.uid);
          await cartStore.fetchUserData();
          await cartStore.fetchCartItems();
        } else {
          cartStore.setUserId(null);
        }
      });
    });

    return { showNavbar };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.notification {
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
