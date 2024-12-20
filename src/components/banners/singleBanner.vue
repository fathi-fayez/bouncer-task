<template>
  <div class="banner-container overflow-hidden">
    <div class="banner-content">
      <h1>iPhone 6 Plus</h1>
      <p class="pt-5 pb-12">Performance and design. Taken right to the edge.</p>
      <a href="#" class="text-white pb-2 border-b-4">SHOP NOW</a>
    </div>
    <div class="banner-image">
      <img
        src="/src/assets/images/banners/iPhone6s_discover_desktop_08_iOS9.png"
        alt="iPhone 6 Plus"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.banner-container {
  background-color: #2e90e5;
  display: flex;
  height: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    height: 400px;
  }

  .banner-content {
    flex-basis: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    text-align: start;
    color: white;
    letter-spacing: 1px;
    padding: 50px;

    @media (min-width: 1024px) {
      padding-left: 300px;
      padding-right: 200px;
      padding-bottom: 80px;
    }

    @media (min-width: 768px) and (max-width: 1200px) {
      padding-right: 0;
    }
  }

  .banner-image {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
