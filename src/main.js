
import './index.css'
import 'primeicons/primeicons.css'
import  Notifications  from '@kyvg/vue3-notification'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Notifications)

app.mount('#app')
