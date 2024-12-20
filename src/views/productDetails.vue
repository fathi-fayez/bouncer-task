<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-8">
        <!-- Product container -->
        <div id="product-details" class="col-span-4 md:col-span-3">
          <div v-if="selectedProduct" class="grid grid-cols-12 gap-5">
            <!-- Images -->
            <div class="col-span-12 md:col-span-5">
              <div class="grid grid-cols-12 m-4">
                <div class="mainImageContainer col-span-12">
                  <img
                    class="main-image w-1/2 mb-10 md:mb-4 md:w-full rounded block mx-auto"
                    :src="mainImage"
                    :alt="selectedProduct.title"
                  />
                </div>
                <div class="product-images col-span-12 grid grid-cols-3 mt-4 gap-3">
                  <img
                    v-for="(img, index) in selectedProduct.images"
                    :key="index"
                    class="details-image rounded block mx-1 cursor-pointer"
                    :src="img"
                    :alt="selectedProduct.title"
                    @click="changeMainImage(img)"
                  />
                </div>
              </div>
            </div>
            <!-- Details -->
            <div class="col-span-12 md:col-span-7">
              <h4 class="product-name mb-4">{{ selectedProduct.title }}</h4>
              <!-- Rating Stars -->
              <div class="rating d-flex border-b-2 pb-4">
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
                  <span class="last-price">${{ selectedProduct.price }} </span
                  ><span class="old-price">$599</span>
                </div>
                <h5 class="mb-4">Availability:<span class="ms-12">In stock</span></h5>
                <h5 class="mb-4">
                  Category:<span class="ms-14">{{ selectedProduct.category.name }}</span>
                </h5>
                <h5>Free shipping</h5>

                <!-- Color Selector -->
                <div class="flex border-t-2 mt-4 py-5">
                  <h5>Select Color:</h5>
                  <ul class="color-options ms-8">
                    <li class="active" style="background-color: #f44336"></li>
                    <li style="background-color: #03a9f4"></li>
                    <li style="background-color: #e91e63"></li>
                    <li style="background-color: #ffeb3b"></li>
                  </ul>
                </div>

                <!-- Size Selector -->
                <div class="flex items-center pb-4 border-b-2">
                  <h5 class="me-5">Size</h5>
                  <select class="ms-20 border p-1">
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                </div>

                <!-- Item Btns -->
                <div class="flex my-4 items-center justify-between pb-4 border-b-2">
                  <!-- Quantity Buttons -->
                  <div class="flex items-center justify-center bg-gray-200 w-24 h-12">
                    <button @click="quantity > 1 ? quantity-- : false" class="btn text-blue-500">
                      -
                    </button>
                    <input
                      type=" number"
                      style="border: none; outline: none; width: 60px; font-size: 13px"
                      min="1"
                      v-model="quantity"
                      class="text-center py-3 bg-gray-200"
                    />
                    <button @click="quantity++" class="btn text-blue-500">+</button>
                  </div>

                  <!-- Cart Buttons -->
                  <div class="cart-btns flex">
                    <button
                      @click="addToCart(selectedProduct)"
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
                    <button class="flex items-center p-3 bg-gray-200 mx-2">
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

                <!-- Shares Buttons -->
                <div class="flex justify-between mt-6 mb-20 text-white">
                  <button class="facebook-btn rounded w-1/2 mr-3 py-3">
                    <i class="fa-brands fa-facebook pr-1"></i>Share on Facebook
                  </button>
                  <button class="twitter-btn rounded w-1/2">
                    <i class="fa-brands fa-twitter pr-1"></i>Share on Twitter
                  </button>
                </div>
              </div>
            </div>

            <!-- Tabs Container -->
            <div class="col-span-12 mt-5 mb-12 text-center space-y-4 bg-gray-100 p-4 rounded">
              <!-- Tabs -->
              <ul class="flex border-b-4 border-gray-150" role="tablist">
                <li class="mr-2" v-for="tab in tabs" :key="tab.id">
                  <button
                    :class="[
                      'px-4 pt-2 pb-6   text-sm font-medium rounded-t-md focus:outline-none',
                      activeTab === tab.id
                        ? 'text-blue-500 border-b-4 border-blue-500'
                        : 'text-gray-500 hover:text-blue-600',
                    ]"
                    :id="tab.id"
                    :aria-controls="tab.target"
                    :aria-selected="activeTab === tab.id"
                    @click="selectTab(tab.id)"
                  >
                    {{ tab.label }}
                  </button>
                </li>
              </ul>

              <!-- Tab Content -->
              <div v-for="tab in tabs" :key="tab.target">
                <div
                  v-show="activeTab === tab.id"
                  :id="tab.target"
                  role="tabpanel"
                  :aria-labelledby="tab.id"
                  class="tab-content"
                >
                  <p>{{ tab.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="col-span-4 md:col-span-1">
          <h4 class="text-gray-400 mb-6">BEST SELLER</h4>
          <singleProduct :product="selectedProduct" />
          <hr class="mt-5 mb-8 border-dashed border-2 w-2/3 mx-auto" />
          <singleCard />
        </div>
        <!-- Related Products -->
        <div class="col-span-4 mb-40">
          <h4 class="text-center my-5">RELATED PRODUCTS</h4>
          <div class="grid grid-cols-12 gap-5 items-center">
            <div
              v-for="product in relatedProducts"
              :key="product.id"
              class="col-span-6 md:col-span-3"
            >
              <singleProduct :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import singleProduct from '../components/products/singleProduct.vue'
import singleCard from '../components/banners/singleCard.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const productsStore = useProductsStore()
const cartStore = useCartStore()

const route = useRoute()
const productId = ref(route.params.id)
const productCategory = ref(route.params.category)
const products = computed(() => productsStore.products)
const quantity = ref(1)

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

const tabs = [
  {
    id: 'tab-home',
    label: 'Product Infomation',
    target: 'tab-content-home',
    content:
      'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
  },
  {
    id: 'tab-profile',
    label: 'Reviews',
    target: 'tab-content-profile',
    content:
      'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate.',
  },
  {
    id: 'tab-contact',
    label: 'Another tab',
    target: 'tab-content-contact',
    content:
      'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.Nunc facilisis sagittis ullamcorper.',
  },
]

const activeTab = ref('tab-home')

const selectTab = (tabId: string) => {
  activeTab.value = tabId
}

// Watch Route Changes
watch(
  () => route.params,
  async (newParams) => {
    productId.value = newParams.id
    productCategory.value = newParams.category
    refetch({ id: newParams.id })
  },
)

// GraphQL Query to get the selected single product
const PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      title
      id
      price
      images
      category {
        name
      }
    }
  }
`
// Fetch product data
const { result, refetch } = useQuery(PRODUCT_QUERY, { id: productId.value })
const selectedProduct = computed<Product>(() => result.value?.product)

// Get The Related Products
const relatedProducts = computed(() => {
  return products.value
    .filter(
      (product: Product) =>
        product.category.name === String(productCategory.value) &&
        product.id !== Number(productId.value),
    )
    .splice(0, 4)
})

// Main image handling
const mainImage = ref<string | null>(null)

// Initialize mainImage when selectedProduct changes
const updateMainImage = () => {
  if (selectedProduct.value?.images?.length) {
    mainImage.value = selectedProduct.value.images[0]
  }
}

// Update main image dynamically
const changeMainImage = (img: string) => {
  mainImage.value = img
}

// Watch the selectedProduct for changes and update mainImage accordingly
watch(
  selectedProduct,
  () => {
    updateMainImage()
  },
  { immediate: true },
)

// Add To Cart Function
const addToCart = (product: Product) => {
  if (!product) {
    toast.error('Invalid product')
    return
  }
  const item = { ...product, quantity: quantity.value }
  cartStore.addProductToCart(item)
  toast.success('Added To Cart', { autoClose: 500 })
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 150px;
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

.color-options {
  list-style: none;
  text-align: center;
  padding: 0;

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

.add-to-cart-btn,
.add-to-favorite {
  color: rgb(193, 200, 206);
  background-color: #ebf6ff;

  &:hover {
    color: rgb(51, 160, 255);
  }
}

.add-to-cart-btn {
  margin-right: 20px;
}

.facebook-btn {
  background-color: #385c8e;
}

.twitter-btn {
  background-color: #03a9f4;
}

.details-image {
  max-width: 100%;
  // width: calc(100% / 3);
}
</style>
