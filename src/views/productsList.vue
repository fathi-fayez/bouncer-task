<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- SideBar -->
        <div
          class=""
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
                  v-show="windowWidth > 698"
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

          <!-- Products -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              :class="{ 'col-span-1': isGridView, 'col-span-3': !isGridView }"
              v-for="product in paginatedProducts"
              :key="product.id"
            >
              <singleProduct :product="product" :isGridView="isGridView" />
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
const productsStore = useProductsStore()
const isGridView = ref<boolean>(true)
const route = useRoute()
const productCategory = ref(route.params.category)
const products = computed<Product[]>(() => productsStore.products)
const lengthOfProducts = ref(0)
const windowWidth = ref(0)

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

// Set The Screen Width
onMounted(async () => {
  windowWidth.value = window.innerWidth
  window.onresize = () => {
    windowWidth.value = window.innerWidth
  }
})

// Watch Route Changes
watch(
  () => route.params,
  async (newParams) => {
    productCategory.value = newParams.category
  },
)
watch([minRange, maxRange], updateRanges)

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
