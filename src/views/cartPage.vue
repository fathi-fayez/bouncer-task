<template>
  <div>
    <div v-if="store.cartItems.length > 0" class="container grid grid-cols-12">
      <!-- Items Container -->
      <div class="items-container p-5 col-span-12 grid grid-cols-12 mb-4">
        <!-- Header -->
        <div class="header col-span-12 grid grid-cols-12 rounded shadow-sm p-3 border-b">
          <span class="col-span-1"></span>
          <span class="col-span-5">PRODUCT</span>
          <span class="item-cell col-span-2">PRICE</span>
          <span class="item-cell col-span-2">QTY</span>
          <span class="item-cell col-span-2">UNIT PRICE</span>
        </div>
        <!-- Items -->
        <div
          v-for="item in store.cartItems"
          :key="item.id"
          class="item col-span-12 grid grid-cols-12 rounded md:py-8 mb-2 shadow-sm border-b"
        >
          <div class="item-cell col-span-1">
            <font-awesome-icon
              @click="deleteItem(item)"
              :icon="['fas', 'xmark']"
              style="color: #ce1212; cursor: pointer"
            />
          </div>
          <div class="img item-cell col-span-1"><img :src="item.images[0]" alt="product.id" /></div>

          <span class="item-cell col-span-4">{{
            item.title.split(' ').slice(0, 3).join(' ')
          }}</span>
          <span class="item-cell col-span-2">$ {{ item.price }}</span>
          <div class="item-cell col-span-2 bg-gray-200 m-auto flex-col md:flex-row md:w-24">
            <button @click="decreaseQuantity(item)" class="btn text-blue-500">-</button>
            <span class="m-3">{{ item.quantity }}</span>
            <button @click="addToCart(item)" class="btn text-blue-500">+</button>
          </div>
          <span class="item-cell col-span-2">$ {{ (item.quantity * item.price).toFixed(2) }}</span>
        </div>
      </div>

      <!-- Payment Container -->
      <div class="payment-box col-span-12">
        <div class="grid grid-cols-12">
          <!-- Voucher Code Input -->
          <div class="col-span-12 md:col-span-6 mb-16">
            <form class="flex justify-center md:justify-start md:ps-5">
              <div class="">
                <input class="border p-3" type="search" name="search" placeholder="Voucher code" />
                <input
                  @click.prevent="showVoucherCode"
                  class="bg-blue-500 p-3 rounded-tr-md rounded-bl-md cursor-pointer"
                  type="submit"
                  value="Redeem"
                />
              </div>
            </form>
          </div>
          <div class="space-between hidden md:block col-span-2"></div>

          <!-- Payment Checkout -->
          <div class="card-body col-span-12 md:col-span-4">
            <div class="flex justify-between mb-5">
              <p>Subtotal</p>
              <p>$ {{ totalPrice.toFixed(2) }}</p>
            </div>
            <div class="flex justify-between mb-5">
              <p>Shipping fee</p>
              <p>$ {{ shippingCost }}</p>
            </div>
            <div class="flex justify-between mb-5">
              <p>Coupon</p>
              <p>No</p>
            </div>
            <hr />
            <div class="flex justify-between mt-8 mb-6">
              <h3>TOTAL</h3>
              <p class="text-3xl">{{ subTotalPrice.toFixed(2) }} $</p>
            </div>
            <button @click="showSweetAlert" class="bg-blue-500 text-white w-full py-3 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <emptyCart />
    </div>
  </div>
</template>

<script setup lang="ts">
import emptyCart from '../components/emptyCart.vue'
import { useCartStore } from '@/stores/cartStore'
import { computed, onMounted } from 'vue'
import Swal from 'sweetalert2'
const store = useCartStore()
const shippingCost = store.shippingCost

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

onMounted(() => {
  store.getCartItems()
})

const totalPrice = computed(() => {
  let price = 0
  store.cartItems.map((el: CartItem) => (price += el.quantity * el.price))
  return price
})
const subTotalPrice = computed(() => {
  let price = shippingCost
  store.cartItems.map((el: CartItem) => (price += el.quantity * el.price))
  return price
})

const deleteItem = (item: CartItem) => {
  store.deleteItem(item.id)
}

const decreaseQuantity = (item: CartItem) => {
  store.decreaseQuantity(item.id)
}

const addToCart = (item: CartItem) => {
  const cartItem = { ...item, quantity: 1 }
  store.addProductToCart(cartItem)
}

const showSweetAlert = () => {
  Swal.fire({
    title: 'Done!',
    text: 'Your  order has been placed.',
    icon: 'success',
    confirmButtonText: 'OK',
  })
}
const showVoucherCode = () => {
  Swal.fire({
    title: 'No Voucher Code',
    text: 'Check you code',
    icon: 'question',
  })
}
</script>

<style lang="scss" scoped>
.items-container {
  .item-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.payment-box {
  padding-top: 50px;
  padding-bottom: 100px;
}
@media (max-width: 769px) {
  .header {
    display: none !important;
  }
  span {
    font-size: 10px;
  }
  .item-control {
    flex-direction: column;
  }
}
</style>
