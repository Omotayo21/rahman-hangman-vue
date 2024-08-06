import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ShopView from '../views/ShopView.vue'
import AboutView from '../views/AboutView.vue'
import CartView from '../views/CartView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CheckoutView from '../views/CheckoutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CompleteView from '../views/CompleteView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/products/:id',
      name: 'details',
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
