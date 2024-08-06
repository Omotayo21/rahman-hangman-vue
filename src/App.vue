<template>
  <div id="app">
   
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
 
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';




export default {
  name: 'App',
  components: {
   
  },
  setup() {
   
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>
