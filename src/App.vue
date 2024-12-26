<template>
  <div>
    <popupNewsletter />
    <Header> </Header>
    <breadcrumbs v-if="!$route.meta.withoutCrumps" :breadcrumbs="breadcrumbsArr" />
    <RouterView />
    <hr />
    <footerComponent />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Header from './components/Header.vue'
import breadcrumbs from './components/breadcrumbs.vue'
import footerComponent from './components/footer.vue'
import popupNewsletter from './components/banners/popupNewsletter.vue'
import { useProductsStore } from '@/stores/productsStore'
import { useCartStore } from '@/stores/cartStore'
import { useRoute } from 'vue-router'
const route = useRoute()

// Access the Pinia store
const productStore = useProductsStore()
const cartStore = useCartStore()

const breadcrumbsArr = ref([{ label: 'Home', isLink: true, path: '/' }])

watch(
  () => route.path,
  (newPath) => {
    breadcrumbsArr.value = [{ label: 'Home', isLink: true, path: '/' }]
    if (newPath.includes('productsList')) {
      breadcrumbsArr.value.push({ label: 'Products', isLink: false, path: '/productsList' })
    }
    if (newPath.includes('productDetails')) {
      breadcrumbsArr.value.push({ label: 'Product Details', isLink: false })
    }
    if (newPath.includes('cartPage')) {
      breadcrumbsArr.value.push({ label: 'Cart Page', isLink: false })
    }
  },
)

// Fetch products and categories when the app loads
onMounted(async () => {
  try {
    await Promise.all([
      productStore.fetchProducts(),
      productStore.fetchCategories(),
      cartStore.getCartItems(),
    ])
  } catch (err) {
    console.error('Error fetching data:', err)
  }
})
</script>

<style lang="scss">
.app {
  overflow-x: hidden;
}

a {
  color: #888;
  text-decoration: none;
}

input[type='submit'] {
  border-color: transparent;
  color: white;
}
</style>
