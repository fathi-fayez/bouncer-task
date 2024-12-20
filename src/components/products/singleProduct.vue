<template>
  <div v-if="product">
    <!-- product card -->
    <div
      :class="{ 'product-list': !isGridView }"
      class="card border-2 shadow-sm rounded text-center"
    >
      <div class="image-container relative">
        <img :src="product.images[0]" :alt="product.title" />
        <div class="overlay-buttons">
          <button class="add-to-favorite" aria-label="Add to favorite">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9825 2.00001C12.1622 2.00196 13.2313 2.6952 13.7144 3.77143C14.1976 4.84766 14.0051 6.10719 13.2225 6.99C12.6725 7.60999 7.98254 12 7.98254 12C7.98254 12 3.28253 7.60999 2.73254 6.97999C2.24744 6.43482 1.98041 5.72981 1.9826 5.00001C1.9826 3.34315 3.32574 2.00001 4.9826 2.00001C6.63946 2.00001 7.9826 3.34315 7.9826 5.00001C7.9826 3.34315 9.32574 2.00001 10.9825 2.00001ZM10.9825 8.10398e-06C9.90039 -0.00194502 8.84711 0.34919 7.98254 1.00007C5.93133 -0.524467 3.06061 -0.256706 1.32672 1.62086C-0.407166 3.49842 -0.446046 6.38129 1.23657 8.30494C1.79858 8.94898 5.49756 12.413 6.61755 13.459C7.38635 14.1779 8.58075 14.1779 9.34955 13.459C10.4656 12.414 14.1495 8.95899 14.7186 8.31599C16.0227 6.84418 16.343 4.7447 15.5372 2.951C14.7313 1.1573 12.949 0.00244951 10.9825 8.10398e-06Z"
                fill="#33A0FF"
              />
            </svg>
          </button>
          <button class="add-to-cart" @click="addToCart(product)" aria-label="Add to cart">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.9611 11C13.912 10.9984 14.7293 10.3251 14.913 9.39203L15.913 4.39203C16.0304 3.80524 15.8787 3.19672 15.4998 2.73358C15.1209 2.27039 14.5545 2.00128 13.956 2H4.00005V1C4.00005 0.447693 3.55233 0 3.00005 0H1.00906C0.456779 0 0.00905597 0.447693 0.00905597 1C0.00905597 1.55231 0.456779 2 1.00906 2H2.00906V12C1.19933 11.9964 0.467277 12.4813 0.154899 13.2284C-0.157509 13.9755 0.0113753 14.8372 0.582664 15.411C1.15395 15.9849 2.01488 16.1577 2.76333 15.8486C3.5118 15.5396 4.00005 14.8098 4.00005 14H10.969C10.9734 15.0991 11.8672 15.9869 12.9663 15.9839C14.0654 15.981 14.9545 15.0884 14.953 13.9893C14.9515 12.8902 14.0601 11.9999 12.961 11.9999L4.00005 12V11H12.9611ZM13.9611 4L12.9611 9H4.00005V4H13.956H13.9611Z"
                fill="#33A0FF"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr class="w-48 mx-auto mt-7" />
      <router-link
        :to="{
          name: 'productDetails',
          params: { id: product.id, category: product.category.name },
        }"
      >
        <div class="card-body">
          <h5 class="title font-bold text-black mt-5 mb-5">
            {{ product.title.split(' ').slice(0, 3).join(' ') }}
          </h5>

          <div class="rating">
            <i class="fa-solid fa-star" style="color: #ffc600" v-for="i in 3" :key="i"></i>
            <i class="fa-solid fa-star" v-for="i in 2" :key="'empty' + i"></i>
          </div>
          <div class="price">
            <span class="last-price">${{ product.price }}</span> <span class="old-price">$599</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../../stores/cartStore'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { defineProps, withDefaults } from 'vue'

// Cart store instance
const store = useCartStore()

// Define the Product interface
interface Product {
  id: number
  title: string
  price: number
  quantity?: number
  description: string
  images: string[]
  category: {
    name: string
  }
}
interface cartItem {
  id: number
  title: string
  price: number
  quantity: number
  description: string
  images: string[]
  category: {
    name: string
  }
}

// Define props with defaults
const props = defineProps<{
  product: Product
  isGridView?: boolean
}>()

// Add-to-cart method
const addToCart = (product: Product) => {
  if (!product || !product.id) {
    toast.error('Invalid product')
    return
  }
  const item = { ...product, quantity: 1 }
  store.addProductToCart(item as cartItem)
  toast.success('Added To Cart', { autoClose: 500 })
}
</script>

<style lang="scss" scoped>
.product-list {
  flex-direction: row;
  height: fit-content !important;
  padding: 30px;
  align-items: center;
  justify-content: center;

  .image-container {
    flex-basis: 50%;
  }
}

.card {
  position: relative;

  a {
    text-decoration: none;
  }

  .image-container {
    height: 200px;

    img {
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      padding: 10px;
    }
  }

  .overlay-buttons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background: rgba(246, 246, 246, 0.781);
    transition: opacity 0.5s;

    .add-to-favorite,
    .add-to-cart {
      border-radius: 50%;
      padding: 12px;
      margin: 4px;
      color: rgb(51, 160, 255);
      border: 2px solid rgb(164, 204, 234);
    }
  }

  &:hover .overlay-buttons {
    opacity: 1;
  }

  .price {
    margin-top: 10px;
    margin-bottom: 30px;

    span.last-price {
      color: #ff4858;
    }

    span.old-price {
      text-decoration: line-through;
      margin-left: 10px;
    }
  }
}
</style>
