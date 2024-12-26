<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- SideBar -->
        <div
          :class="[
            'sideBar fixed lg:static top-0 h-screen bg-gray-600 lg:bg-white z-50 col-span-1 p-2 lg:p-0',
            { 'toggle-sideBar': toggleSideBar },
          ]"
          ref="sideBar"
        >
          <font-awesome-icon
            @click="toggleSideBar = !toggleSideBar"
            class="toggle-icon lg:hidden bg-gray-600 text-white p-3 rounded cursor-pointer"
            :icon="['fas', 'sliders']"
          />
          <!-- Accesories Component -->
          <div class="accesories-card">
            <div class="header">ACCESORIES</div>
            <div class="content">
              <div class="item"><span>Apple Car</span><span class="qty">2</span></div>
              <div class="item feature">
                <span>Air port & wireless</span><span class="qty">48</span>
              </div>
              <div class="item"><span>Cables & Docks</span><span class="qty">14</span></div>
              <div class="item"><span>Cases & Films</span><span class="qty">15</span></div>
              <div class="item"><span>Charging Devices</span><span class="qty">23</span></div>
              <div class="item"><span>Connected home</span><span class="qty">1</span></div>
              <div class="item"><span>Headphones</span><span class="qty">95</span></div>
            </div>
          </div>

          <!-- Price Component -->
          <div class="accesories-card">
            <div class="header">PRICES</div>
            <div class="content">
              <div class="price-range flex justify-between items-center">
                <span>Range:</span>
                <span>$ {{ minRange }} - $ {{ maxRange }}</span>
              </div>
              <div class="double_range_slider_box my-4">
                <div class="double_range_slider">
                  <span class="range_track" :style="rangeTrackStyle"></span>
                  <input
                    type="range"
                    class="min"
                    min="0"
                    max="100"
                    v-model="minRange"
                    step="1"
                    @input="updateRanges"
                  />
                  <input
                    type="range"
                    class="max"
                    min="0"
                    max="100"
                    v-model="maxRange"
                    step="1"
                    @input="updateRanges"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Color Box -->
          <div class="color-box my-6">
            <h5 class="header">COLOR</h5>
            <ul class="color-options p-0 flex items-center justify-between">
              <li class="active" style="background-color: #f44336"></li>
              <li style="background-color: #03a9f4"></li>
              <li style="background-color: #e91e63"></li>
              <li style="background-color: #ffeb3b"></li>
              <li style="background-color: #ff533b"></li>
              <li style="background-color: #aedbcb"></li>
            </ul>
          </div>

          <!--  Brand Selector  Component -->
          <div class="accesories-card">
            <div class="header">BRAND</div>
            <div class="content">
              <div class="item"><span>Apple</span><span class="qty">99</span></div>
              <div class="item feature"><span>Lg</span><span class="qty">99</span></div>
              <div class="item"><span>Samsung</span><span class="qty">14</span></div>
              <div class="item"><span>Siemens</span><span class="qty">15</span></div>
            </div>
          </div>

          <!-- Button More -->
          <div class="accesories-card mt-3 text-center btn w-100">
            <button style="border: none">MORE</button>
          </div>
        </div>

        <!-- Main Content -->
        <div id="products-list" class="grid-container col-span-4 lg:col-span-3">
          <!-- Banner -->
          <div class="banner-container overflow-hidden">
            <div class="banner-content">
              <h1>iPhone 8</h1>
              <p class="pt-5 pb-8">Performance and design. Taken right to the edge.</p>
              <a href="#" class="text-white pb-2 border-b-4">SHOP NOW</a>
            </div>
            <div class="banner-image">
              <img
                src="/src/assets/images/banners/iPhone6s_discover_desktop_08_iOS9.png"
                alt="iPhone 6 Plus"
              />
            </div>
          </div>

          <!-- NavBar -->
          <nav class="bg-gray-100 my-5 rounded-sm shadow">
            <div class="flex justify-between items-center px-1 md:px-4 py-3">
              <ul class="flex items-center gap-1 md:gap-8">
                <!-- Product Count -->
                <li class="nav-item text-black text-sm md:text-base">
                  {{ getLengthOfProducts }} items
                </li>
                <!-- Dropdown One -->
                <li class="hidden md:block">Sort by</li>
                <li class="relative">
                  <a
                    href="#"
                    class="text-gray-800 hover:text-blue-500 flex items-center justify-between w-15 border"
                    id="navbarDropdown"
                    @click.prevent="toggleDropdown('sortBy')"
                  >
                    Name
                    <i class="ml-2 fa-solid fa-chevron-down"></i>
                  </a>
                  <ul
                    v-show="activeDropdown === 'sortBy'"
                    class="absolute bg-white shadow-lg rounded-lg mt-2 w-40 z-10"
                  >
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Action</a></li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Another action</a>
                    </li>
                    <li class="border-t my-2"></li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Something else here</a>
                    </li>
                  </ul>
                </li>
                <!-- Dropdown Two -->
                <li class="hidden md:block">Show</li>
                <li class="relative">
                  <a
                    href="#"
                    class="text-gray-800 hover:text-blue-500 flex items-center justify-between w-15 border"
                    id="navbarDropdown"
                    @click.prevent="toggleDropdown('show')"
                  >
                    12
                    <i class="ml-2 fa-solid fa-chevron-down"></i>
                  </a>
                  <ul
                    v-show="activeDropdown === 'show'"
                    class="absolute bg-white shadow-lg rounded-lg mt-2 w-40 z-10"
                  >
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Action</a></li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Another action</a>
                    </li>
                    <li class="border-t my-2"></li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- Display Icons -->
              <div class="flex items-center gap-0 md:gap-4">
                <a
                  href="#"
                  class="text-gray-800 hover:text-blue-500 p-2"
                  @click.prevent="isGridView = true"
                  :class="{ 'bg-blue-300': isGridView }"
                >
                  <i class="fa-solid fa-grip"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-800 hover:text-blue-500 p-2"
                  @click.prevent="isGridView = false"
                  :class="{ 'bg-blue-300': !isGridView }"
                >
                  <i class="fa-solid fa-table-list"></i>
                </a>
              </div>
            </div>
          </nav>

          <!-- Grid Products -->
          <div v-if="isGridView" class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              v-for="product in paginatedProducts"
              :key="product.id"
              class="grid-products col-span-1"
            >
              <singleProduct :product="product" />
            </div>
          </div>

          <!-- Single Products -->
          <div v-else class="grid grid-cols-1">
            <!-- Product -->
            <div
              v-for="product in paginatedProducts"
              :key="product.id"
              class="col-span-1 grid grid-cols-12 gap-3 border-b-4 border-gray-400 mb-4 py-8"
            >
              <!-- Image -->
              <div class="col-span-12 md:col-span-4">
                <img
                  class="main-image w-full rounded"
                  :src="product.images[0]"
                  :alt="product.title"
                />
              </div>
              <!-- Details -->
              <div class="col-span-12 md:col-span-8">
                <router-link
                  :to="{
                    name: 'productDetails',
                    params: { id: product.id, category: product.category.name },
                  }"
                >
                  <h4 class="product-name mb-4 text-black">{{ product.title }}</h4>
                </router-link>
                <!-- Rating Stars -->
                <div class="rating flex border-b-2 pb-4">
                  <i
                    class="fa-solid fa-star inline-block mr-1"
                    style="color: #ffc600"
                    v-for="i in 3"
                    :key="'filled-' + i"
                  ></i>
                  <i class="fa-solid fa-star" v-for="i in 2" :key="'empty-' + i"></i>
                  <span class="mx-3 text-gray-300">0 reviews</span>
                  <a class="text-blue-500" href="">Submit a review</a>
                </div>

                <!-- Shipping Details -->
                <div>
                  <div class="price">
                    <span class="last-price">${{ product.price }} </span
                    ><span class="old-price">$599</span>
                  </div>
                  <p>{{ product.description }}</p>

                  <!-- Cart Buttons -->
                  <div class="flex my-4 items-center">
                    <button
                      @click="addToCart(product)"
                      class="flex items-center gap-2 p-2 text-xs md:p-3 md:text-sm h-12 text-gray-400 bg-gray-200 mx-2"
                    >
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
                          fill="#a3a8a5"
                        />
                      </svg>
                      Add To Cart
                    </button>
                    <button class="flex items-center p-4 bg-gray-200 mx-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination-container">
            <nav
              class="bg-gray-50 flex justify-center items-center w-full mx-auto shadow"
              aria-label="Pagination"
            >
              <ul class="flex list-none space-x-2">
                <!-- Page Numbers -->
                <li v-for="page in totalPages" :key="page">
                  <button
                    class="px-5 py-4"
                    :class="{
                      'bg-black text-white': page === currentPage,
                      'text-black hover:bg-gray-200': page !== currentPage,
                    }"
                    @click="changePage(page)"
                  >
                    {{ page }}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import singleProduct from '../components/products/singleProduct.vue'
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'
// 000000000
import { useCartStore } from '../stores/cartStore'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// Cart store instance
const cartStore = useCartStore()
const productsStore = useProductsStore()
const isGridView = ref<boolean>(true)
const route = useRoute()
const productCategory = ref(route.params.category)
const products = computed<Product[]>(() => productsStore.products)
const lengthOfProducts = ref(0)

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

const minRange = ref<number>(0)
const maxRange = ref<number>(20)
const minRangeValueGap = 20
const activeDropdown = ref<string | null>(null)
const toggleSideBar = ref<boolean>(false)
const sideBar = ref<HTMLElement | null>(null)

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

// Close the sidebar when clicking outside
function handleClickOutside(event: MouseEvent) {
  if (
    sideBar.value &&
    !sideBar.value.contains(event.target as Node) && // Check if the click is outside the sidebar
    toggleSideBar.value
  ) {
    toggleSideBar.value = !toggleSideBar
  }
}

// Add and remove event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleDropdown = (dropdownName: string) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName
}

const rangeTrackStyle = computed(() => ({
  left: `${(minRange.value / 100) * 100}%`,
  right: `${100 - (maxRange.value / 100) * 100}%`,
}))

const updateRanges = () => {
  if (maxRange.value < 20) {
    maxRange.value = 20
  }
  if (maxRange.value - minRange.value < minRangeValueGap) {
    if (minRange.value > maxRange.value - minRangeValueGap) {
      minRange.value = Math.max(0, maxRange.value - minRangeValueGap)
    } else if (maxRange.value < minRange.value + minRangeValueGap) {
      maxRange.value = minRange.value + minRangeValueGap
    }
  }
}

// Watch Route Changes
watch(
  () => route.params,
  async (newParams) => {
    productCategory.value = newParams.category
  },
)
watch([minRange, maxRange], updateRanges)

// Add To Cart
const addToCart = (product: Product) => {
  if (!product || !product.id) {
    toast.error('Invalid product')
    return
  }
  const item = { ...product, quantity: 1 }
  cartStore.addProductToCart(item as cartItem)
  toast.success('Added To Cart', { autoClose: 500 })
}

// Get The Selected Products
const getProducts = computed(() => {
  return products.value.filter((product) => product.category.name == productCategory.value)
})

// Get The Length Of Products
const getLengthOfProducts = computed(() => {
  return (lengthOfProducts.value = getProducts.value.length)
})

// Pagination variables
const currentPage = ref<number>(1)
const itemsPerPage = ref<number>(6)

// Paginated Products
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return getProducts.value.slice(start, end)
})

// Total Pages
const totalPages = computed(() => Math.ceil(getProducts.value.length / itemsPerPage.value))

// Change Page
const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<style lang="scss" scoped>
.sideBar {
  left: -260px;
  transition: all 0.4s ease;
}

.price {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 24px;

  .last-price {
    color: #ff4858;
    margin-right: 10px;
  }

  .old-price {
    text-decoration: line-through;
    color: rgb(93, 101, 107);
  }
}

.toggle-icon {
  position: absolute;
  right: -35px;
  top: 80px;
}

.toggle-sideBar {
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}
.pagination-container {
  margin-top: 50px;
  margin-bottom: 100px;
}

.icons {
  svg {
    font-size: 20px;
  }

  li.active svg {
    color: #33a0ff;
  }
}

.accesories-card {
  background: #f6f7f8;
  border-radius: 4px;
  padding: 16px 20px;
  position: relative;
  margin-bottom: 25px;
}

.header {
  color: #22262a;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 30px;
}

.content .item {
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  margin-bottom: 20px;
  position: relative;
}

.qty {
  position: absolute;
  right: 0;
  color: #22262a;
  opacity: 0.35;
  text-align: right;
}

.feature span {
  color: #33a0ff;
}

.double_range_slider_box {
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.double_range_slider {
  width: 100%;
  height: 7px;
  position: relative;
  background-color: #dddddd;
}

.range_track {
  height: 100%;
  position: absolute;
  border-radius: 20px;
  background-color: var(--blue-color);
}

.minvalue {
  position: absolute;
  padding: 6px 15px;
  background: #0e5f59;
  border-radius: 1rem;
  color: white;
  bottom: 0;
  transform: translate(0, -100%);
  left: 0;
  font-size: 1rem;
  transition: left 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: left, transform;
}

.maxvalue {
  position: absolute;
  padding: 6px 15px;
  background: #0e5f59;
  border-radius: 1rem;
  color: white;
  top: 0;
  transform: translate(0, 100%);
  right: 0;
  font-size: 1rem;
  transition: right 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: right, transform;
}

input {
  position: absolute;
  width: 100%;
  height: 5px;
  background: none;
  pointer-events: none;
  appearance: none;
  top: 50%;
  transform: translateY(-50%);
}

input::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: var(--blue-color);
  pointer-events: auto;
  -webkit-appearance: none;
  cursor: pointer;
  margin-bottom: 1px;
}

.color-box {
  background: #f6f7f8;
  border-radius: 4px;
  padding: 16px 20px;
  box-sizing: border-box;

  li {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    border: 3px solid #eee;

    &.active {
      border: 3px solid rgb(6, 153, 233);
    }
  }
}
.banner-container {
  background-color: #2e90e5;
  display: flex;
  height: 300px;

  @media (max-width: 768px) {
    height: 200px;
  }

  .banner-content {
    flex-basis: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    color: white;
    letter-spacing: 1px;
    padding-left: 50px;

    @media (max-width: 768px) {
      padding-left: 10px;
      h1 {
        font-size: 15px;
      }
      p {
        padding: 5px 0;
        font-size: 10px;
      }
      a {
        font-size: 8px;
      }
    }
  }
}
</style>
