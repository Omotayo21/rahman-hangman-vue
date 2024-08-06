
import { defineStore } from 'pinia'
import { db } from '../firebase' 
import { ref, set, get, update, remove } from 'firebase/database'
import { notify } from '@kyvg/vue3-notification'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    userId: null,
    notification: null
  }),
  getters: {
    total() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    cartQuantity() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0)
    }
  },
  actions: {
    setUserId(userId) {
      this.userId = userId
    },
    async clearCart() {
      if (this.userId) {
       
        const userCartRef = ref(db, `carts/${this.userId}`)
        await set(userCartRef, []) // Clear cart in database
      }
      this.items = [] // Clear cart in local state
    },
    setUserId(userId) {
      this.userId = userId
    },
    async fetchUserData() {
      if (!this.userId) {
        console.error('User ID is not set')
        return
      }
      const userRef = ref(db, `users/${this.userId}`)
      try {
        const snapshot = await get(userRef)
        if (snapshot.exists()) {
          this.userData = snapshot.val()
        } else {
          console.log('No user data found')
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
    async fetchCartItems() {
      if (!this.userId) {
        console.error('User ID is not set')
        return
      }
      const userCartRef = ref(db, `carts/${this.userId}/items`)
      try {
        const snapshot = await get(userCartRef)
        if (snapshot.exists()) {
          this.items = Object.values(snapshot.val() || {})
        } else {
          console.log('No cart items found')
        }
      } catch (error) {
        console.error('Error fetching cart items:', error)
      }
    },
    async addToCart(product) {
      if (!this.userId) {
        console.error('User ID is not set')
        return
      }
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
        await this.updateItemInDatabase(existingItem)
      } else {
        const newItem = { ...product, quantity: 1 }
        this.items.push(newItem)
        await this.addItemToDatabase(newItem)
      }
      notify({
        title: 'Success',
        text: 'Item added to cart successfully',
        type: 'success',
        duration: 2000
      })
    },
    async incrementItem(productId) {
      const item = this.items.find((item) => item.id === productId)
      if (item) {
        item.quantity += 1
        await this.updateItemInDatabase(item)
      }
    },
    async decrementItem(productId) {
      const item = this.items.find((item) => item.id === productId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1
          await this.updateItemInDatabase(item)
        } else {
          await this.removeFromCart(productId)
        }
      }
    },
    async removeFromCart(productId) {
      if (!this.userId) {
        console.error('User ID is not set')
        return
      }
      const itemIndex = this.items.findIndex((item) => item.id === productId)
      if (itemIndex !== -1) {
        const item = this.items[itemIndex]
        this.items.splice(itemIndex, 1)
        await this.removeItemFromDatabase(item.id)
      }
    },
    async addItemToDatabase(item) {
      try {
        const userCartRef = ref(db, `carts/${this.userId}/items/${item.id}`)
        await set(userCartRef, item)
      } catch (error) {
        console.error('Error adding item to database:', error)
      }
    },
    async updateItemInDatabase(item) {
      try {
        const itemRef = ref(db, `carts/${this.userId}/items/${item.id}`)
        await update(itemRef, { quantity: item.quantity })
      } catch (error) {
        console.error('Error updating item in database:', error)
      }
    },
    async removeItemFromDatabase(itemId) {
      try {
        const itemRef = ref(db, `carts/${this.userId}/items/${itemId}`)
        await remove(itemRef)
        notify({
          title: 'Item Removed',
          text: `The item has been removed from your cart.`,
          type: 'error',
          duration: 2000
        })
      } catch (error) {
        console.error('Error removing item from database:', error)
      }
    }
  }
})
