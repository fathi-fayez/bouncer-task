<template>
  <div class="navBar container">
    <h1 class="logo">BOUNCER</h1>
    <ul class="nav-icons block md:flex">
      <li>
        <router-link to="/">HOME</router-link>
      </li>

      <li v-for="category in categories" :key="category">
        <router-link
          :to="{
            name: 'productsList',
            params: { category: category },
          }"
          >{{ category.toLocaleUpperCase() }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from '@/stores/productsStore'
const productsStore = useProductsStore()
const categories = computed(() =>
  productsStore.categories.map((category) => category.name).splice(0, 5),
)
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;

  .logo {
    margin: 50px;
    color: #d9d9d9;
    -webkit-text-stroke: 1px #000000;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: 5px;
  }

  .nav-icons {
    padding: 0;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-block: 40px;

    li {
      a:hover {
        background-color: #fafafa;
      }

      a {
        text-decoration: none;
        padding: 5px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        transition: 0.3s;
        color: black;
        @media (max-width: 767px) {
          padding: 5px;
          font-size: 14px;
        }
      }
    }
  }
  .router-link-exact-active {
    color: var(--blue-color) !important;
  }
}
</style>
