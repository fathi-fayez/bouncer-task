<template>
  <div class="best-seller-container container">
    <div class="navBar mx-auto text-center mb-12">
      <h1 class="logo text-2xl font-bold">BEST SELLER</h1>
      <ul class="nav-icons flex justify-center gap-0 md:gap-4 mt-4 text-sm md:text-base">
        <li :class="{ active: !selectedCategory }" @click="fetchAllProducts()">All</li>
        <li
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategoryProducts(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="products">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="product in displayedProducts" :key="product.id">
          <singleProduct :product="product" />
        </div>
      </div>
    </div>
    <button class="loadMoreBtn" v-if="hasMoreProducts" @click="loadMoreProducts">Load More</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import singleProduct from './singleProduct.vue'
import { useProductsStore } from '@/stores/productsStore'

interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: {
    name: string
  }
}

interface Category {
  id: number
  name: string
  image: string
}

const productsStore = useProductsStore()
const displayedProducts = ref<Product[]>([])
const selectedCategory = ref<string | null>(null)
const itemsPerPage = ref<number>(4)
const currentIndex = ref<number>(0)
const hasMoreProducts = ref<Boolean>(false)
const products = computed<Product[]>(() => productsStore.products)
const categories = computed<string[]>(() =>
  productsStore.categories.map((category: Category) => category.name).splice(0, 5),
)

// Set Products Function
const setAllProducts = async () => {
  displayedProducts.value = products.value.slice(0, itemsPerPage.value)
  currentIndex.value = itemsPerPage.value
  hasMoreProducts.value = currentIndex.value < products.value.length
}

// Fetch Products When The Component Is Mounted
onMounted(() => {
  productsStore.fetchProducts().then(() => {
    setAllProducts()
  })
})

// Display Products in Specific Categories
const selectedCategoryProducts = (category: string) => {
  selectedCategory.value = category
  const filtered = products.value.filter((product) => product.category.name === category)
  displayedProducts.value = filtered.slice(0, itemsPerPage.value)
  currentIndex.value = itemsPerPage.value
  hasMoreProducts.value = currentIndex.value < filtered.length
}

// Load More Products When There Are More Then 4
const loadMoreProducts = () => {
  if (selectedCategory.value) {
    const filtered = products.value.filter(
      (product) => product.category.name === selectedCategory.value,
    )
    const moreProducts = filtered.slice(currentIndex.value, currentIndex.value + itemsPerPage.value)
    displayedProducts.value = displayedProducts.value.concat(moreProducts)
    currentIndex.value += itemsPerPage.value
    hasMoreProducts.value = currentIndex.value < filtered.length
  } else {
    const moreProducts = products.value.slice(
      currentIndex.value,
      currentIndex.value + itemsPerPage.value,
    )
    displayedProducts.value = displayedProducts.value.concat(moreProducts)
    currentIndex.value += itemsPerPage.value
    hasMoreProducts.value = currentIndex.value < products.value.length
  }
}

// Display All Products
const fetchAllProducts = async () => {
  selectedCategory.value = null
  await setAllProducts()
}
</script>

<style lang="scss" scoped>
.best-seller-container {
  padding-bottom: 150px;

  .nav-icons {
    padding: 0;
    list-style: none;

    li {
      cursor: pointer;
      padding: 10px;

      &:hover {
        color: var(--blue-color);
      }

      &.active {
        color: var(--blue-color);
        border-bottom: 4px solid var(--blue-color);
      }

      & > a:hover {
        color: #2196f3;
        background-color: #fafafa;
      }

      a {
        text-decoration: none;
        padding: 5px 20px;
        color: red !important;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1rem;
        transition: 0.3s;

        @media (max-width: 767px) {
          padding: 5px;
          font-size: 14px;
        }
      }
    }
  }

  .loadMoreBtn {
    background-color: rgb(51, 160, 255);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 50px auto;
    display: block;
    border-radius: 4px;
    font-size: 20px;
  }
}
</style>
