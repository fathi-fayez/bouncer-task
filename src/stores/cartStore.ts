import { defineStore } from 'pinia'

// Define interfaces for cartItems
interface CartItem {
  id: number
  title: string
  price: number
  description: string
  quantity: number
  images: string[]
  category: {
    name: string
  }
}


// Define Pinia store
export const useCartStore = defineStore('carts', {
  state: () => ({
    cartItems: [] as CartItem[],
    shippingCost: 50 as number,
  }),
  getters: {
    // Dynamically calculate the total number of items in the cart
    cartItemsCount: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0)
    },
  },
  actions: {
    addProductToCart(item: CartItem) {
      const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        this.cartItems.push(item)
      }
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
    },

    getCartItems() {
      const storedItems = localStorage.getItem('cart-items')
      if (storedItems) {
        this.cartItems = JSON.parse(storedItems)
      }
    },

    deleteItem(id: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id)
      localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
    },

    decreaseQuantity(itemId: number) {
      const itemIndex = this.cartItems.findIndex((item) => item.id === itemId)

      if (itemIndex >= 0) {
        const cartItem = this.cartItems[itemIndex]

        // Decrease the quantity
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1
        } else {
          // Remove the item if quantity reaches 0
          this.cartItems.splice(itemIndex, 1)
        }
        localStorage.setItem('cart-items', JSON.stringify(this.cartItems))
      }
    },
  },
})
