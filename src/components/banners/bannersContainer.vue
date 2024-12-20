<template>
  <div class="container mx-auto flex flex-wrap">
    <div class="w-full md:w-1/3 p-0">
      <singleCard />
    </div>
    <div class="w-full md:w-1/3 p-0">
      <singleMiddleCard />
    </div>

    <div class="card-container w-full md:w-1/3 p-0">
      <div class="content ml-5">
        <h4 class="text-lg font-semibold">GoPro Hero 6</h4>
        <p class="my-4">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
        <h5 class="text-xl font-bold">299$</h5>
      </div>
      <div class="image">
        <img src="/src/assets/images/banners/50051823_540375@2x.png" alt="GoPro Hero 6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import singleCard from '../banners/singleCard.vue'
import singleMiddleCard from '../banners/singleMiddleCard.vue'
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: -43%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  height: 300px;

  .card-container {
    height: 300px;
    display: flex;
    align-items: center;
    background-color: #c1c8ce;

    .content {
      @media (min-width: 769px) and (max-width: 950px) {
        margin-left: 20px !important;
      }
    }

    .image {
      flex: 0 0 50%;
    }
  }

  @media (max-width: 769px) {
    display: none;
  }
}
</style>
