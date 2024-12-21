<template>
  <div>
    <nav class="bg-white shadow-sm relative">
      <!-- Dinamic SideBar -->
      <sideBar :mobileMenuOpen="mobileMenuOpen" @update:mobileMenuOpen="mobileMenuOpen = $event" />

      <!-- Header -->
      <div class="container mx-auto flex justify-between items-center py-2 px-4">
        <!-- Collapsible Content -->
        <div class="hidden lg:flex flex-grow items-center justify-between">
          <!-- Dropdowns -->
          <ul class="flex space-x-4">
            <li class="relative group">
              <a
                class="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer"
                href="#"
              >
                EN
                <svg
                  class="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </a>
              <ul
                class="absolute left-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
                <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
              </ul>
            </li>
            <li class="relative group">
              <a
                class="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 cursor-pointer"
                href="#"
              >
                USD
                <svg
                  class="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </a>
              <ul
                class="absolute left-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
                <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
              </ul>
            </li>
          </ul>
          <!-- Profile and Cart -->
          <div class="flex space-x-6 mr-5">
            <li>
              <a class="flex items-center gap-3 text-gray-700 hover:text-gray-900" href="#">
                <i class="fa-regular fa-user"></i> My Profile
              </a>
            </li>
            <li>
              <router-link
                :to="{ name: 'cartPage' }"
                class="relative flex items-center gap-3 text-gray-700 hover:text-gray-900"
              >
                <span
                  v-show="count"
                  class="absolute top-0 right-0 -mt-2 -mr-2 text-xs bg-red-500 text-white rounded-full px-1"
                >
                  {{ count }}
                </span>
                <i class="fa-solid fa-cart-shopping"></i> Items
              </router-link>
            </li>
          </div>
        </div>

        <!-- Search Field -->
        <div @click="OnSearch = true" class="flex no-wrap items-center gap-3 ml-4">
          <i class="fa-solid fa-magnifying-glass text-gray-500 cursor-pointer"></i>
          <form v-if="OnSearch">
            <input
              class="w-64 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring"
              v-model="searchQuery"
              placeholder="Search products..."
              aria-label="Search"
              @focus="showResults = true"
              @blur="handleBlur"
            />
          </form>
        </div>
        <!-- Search-Results -->
        <div class="search-results" v-if="showResults" ref="dropdown">
          <ul>
            <li v-for="product in filteredProducts" :key="product.id">
              <router-link
                :to="{
                  name: 'productDetails',
                  params: { id: product.id, category: product.category.name },
                }"
              >
                <div class="flex items-center justify-around">
                  <h5 class="w-1/2">{{ product.title.split(' ').slice(0, 3).join(' ') }}</h5>
                  <span>{{ product.price }} $</span>
                  <img :src="product.images[0]" :alt="product.title" />
                </div>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-md border border-gray-300"
          type="button"
          @click="toggleSidebar"
        >
          <span class="block w-6 h-1 bg-gray-600 mb-1"></span>
          <span class="block w-6 h-1 bg-gray-600 mb-1"></span>
          <span class="block w-6 h-1 bg-gray-600"></span>
        </button>
      </div>
    </nav>

    <navBar />
  </div>
</template>

<script setup lang="ts">
import navBar from '@/components/navBar.vue'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'
import sideBar from '@/components/sideBar.vue'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const OnSearch = ref<boolean>(false)
const showResults = ref<boolean>(false)
const dropdown = ref<HTMLElement | null>(null)
const mobileMenuOpen = ref<boolean>(false)

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

const searchQuery = computed({
  get: () => productsStore.searchQuery,
  set: (value: string) => productsStore.updateSearchQuery(value),
})

// Get the Cart Items Count From Cart Store
const count = computed<number>(() => {
  return cartStore.cartItemsCount
})

// Get products from pinia productsStore
const products = computed(() => productsStore.products)

// Computed property to filter products based on search query
const filteredProducts = computed(() => {
  if (!searchQuery.value) {
    return []
  }
  return products.value
    .filter(
      (product: Product) =>
        product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
    .slice(0, 5)
})

// Function to close the dropdown menu
const closeDropdown = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    showResults.value = false
    OnSearch.value = false
  }
}

// Function to hide results on blur event
const handleBlur = () => {
  setTimeout(() => {
    if (!dropdown.value || !dropdown.value.contains(document.activeElement)) {
      showResults.value = false
    }
  }, 200)
}

function toggleSidebar(event: MouseEvent) {
  // Prevent the click event from propagating
  event.stopPropagation()
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Add and remove event listeners for clicks outside the dropdown
onMounted(() => {
  document.addEventListener('mousedown', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', closeDropdown)
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  li {
    list-style: none;
  }
}

.navbar-nav {
  flex-grow: 1;
  justify-content: space-between;
}

.searchIcon {
  cursor: pointer;
}

.search-results {
  position: absolute;
  background: rgb(225, 224, 224);
  border: 1px solid #817575;
  width: 60%;
  z-index: 1000;
  top: 100%;
  right: 0;
  border-radius: 8px;
}

.search-results ul {
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 10px;
  cursor: pointer;
}

.search-results li:hover {
  background-color: #f1f1f1;
}

.search-results li img {
  width: 70px;
}

@media (max-width: 991px) {
  .search-results {
    top: 270px;
    width: 80%;
  }

  .search-results li {
    padding: 0 5px;
  }

  .search-results li img {
    width: 40px;
  }
}
</style>
