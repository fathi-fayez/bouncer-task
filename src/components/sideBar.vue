<template>
  <aside
    ref="sidebar"
    :class="['side-bar fixed top-0 h-screen w-48  p-4', { 'show-sideBar': mobileMenuOpen }]"
  >
    >
    <!-- Dropdowns -->
    <ul class="space-y-4">
      <li class="relative group">
        <a
          class="flex items-center px-3 py-2 text-white hover:text-gray-300 cursor-pointer"
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
          class="absolute left-32 top-0 mt-0 w-32 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
        >
          <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
        </ul>
      </li>
      <li class="relative group">
        <a
          class="flex items-center px-3 py-2 text-white hover:text-gray-300 cursor-pointer"
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
          class="absolute left-32 top-0 mt-0 w-32 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-20"
        >
          <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
          <li><a class="block px-4 py-2 hover:bg-gray-100" href="#">Action</a></li>
        </ul>
      </li>
    </ul>

    <!-- Profile and Cart Items -->
    <div class="mt-8 space-y-4">
      <div>
        <a class="flex items-center gap-3 text-white hover:text-gray-300" href="#">
          <i class="fa-regular fa-user"></i> My Profile
        </a>
      </div>
      <div>
        <router-link
          :to="{ name: 'cartPage' }"
          class="relative flex items-center gap-3 text-white hover:text-gray-300"
        >
          <span
            v-show="count"
            class="absolute top-0 right-0 -mt-2 -mr-2 text-xs bg-red-700 text-white rounded-full px-1"
          >
            {{ count }}
          </span>
          <i class="fa-solid fa-cart-shopping"></i> Items
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()
const count = computed(() => {
  return cartStore.cartItemsCount
})
const props = defineProps<{
  mobileMenuOpen: boolean
}>()

const sidebar = ref<HTMLElement | null>(null)
const emit = defineEmits(['update:mobileMenuOpen'])

// Close the sidebar when clicking outside
function handleClickOutside(event: MouseEvent) {
  if (
    sidebar.value &&
    !sidebar.value.contains(event.target as Node) && // Check if the click is outside the sidebar
    props.mobileMenuOpen
  ) {
    emit('update:mobileMenuOpen', false)
  }
}

// Add and remove event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
.side-bar {
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  left: -100%;
  transition: all 0.4s ease;
  background-color: #322a2d;
  z-index: 1000;
  .group-hover\:opacity-100 {
    transition: opacity 0.2s ease-in-out;
  }
  &.show-sideBar {
    left: 0;
  }
}
</style>
