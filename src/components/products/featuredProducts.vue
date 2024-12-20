<template>
  <div class="container">
    <h1 class="text-center mb-12 font-bold text-2xl">FEATURED PRODUCTS</h1>
    <div class="news-container">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- news box -->
        <div v-for="box in 3" :key="box" class="news-box">
          <img src="/src/assets/images/products images/50050995_530579.png" alt="" />
          <div class="content">
            <h5>Typesetting industry</h5>
            <div class="rating">
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star" style="color: #ffb301"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="last-price">$499</span> <span class="old-price">$599</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Input -->
    <form>
      <div class="">
        <input
          class="border p-3 w-48 md:w-96"
          type="search"
          name="search"
          placeholder="Search query..."
        />
        <input
          class="bg-blue-500 p-3 rounded-tr-md rounded-bl-md cursor-pointer"
          type="submit"
          value="Search"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.news-container {
  margin-bottom: 120px;

  .news-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;

    img {
      width: 140px;
      margin-right: 10px;
    }
    span.last-price {
      color: #ff4858;
    }

    span.old-price {
      text-decoration: line-through;
    }
  }
}
form {
  text-align: center;
  margin-bottom: 150px;
}
</style>
