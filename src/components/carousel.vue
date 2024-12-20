<template>
  <div class="carousel relative">
    <bannersContainer />
    <swiper
      style="height: 600px"
      :modules="[Navigation]"
      :spaceBetween="30"
      navigation
      class="mySwiper"
    >
      <!-- Slide One -->
      <swiper-slide class="slide-container">
        <div class="main-product overflow-hidden px-3 py-4">
          <div
            class="info-img-product w-full h-full container flex flex-col md:flex-row items-center content-center"
          >
            <div class="info-product text-white w-1/2">
              <h2 class="product-name text-nowrap mb-16">iPhone X</h2>
              <p class="my-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy.
              </p>
              <a href="">MORE</a>
            </div>
            <div class="image-product">
              <img class="max-w-full h-auto" src="/src/assets/images/mobile.1777fab3.png" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Slide Two -->
      <swiper-slide>
        <singleBanner />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

import '../assets/main.css'
import singleBanner from '@/components/banners/singleBanner.vue'
import bannersContainer from '@/components/banners/bannersContainer.vue'
</script>
<style lang="scss" scoped>
.carousel {
  margin-bottom: 400px;

  .slide-container {
    background: linear-gradient(
      219deg,
      rgba(252, 121, 69, 1) 0%,
      rgba(253, 29, 139, 1) 30%,
      rgba(131, 58, 180, 1) 90%
    );

    .main-product {
      height: 610px;
    }

    .info-product {
      text-align: start;

      .product-name {
        font-size: 4rem;

        @media ((max-width: 991px)) {
          font-size: 30px;
        }
      }

      a {
        color: white !important;
        padding-bottom: 5px;
        text-decoration: none;
        border-bottom: 4px solid white;
      }

      @media (max-width: 769px) {
        text-align: center;
        width: 100% !important;
        margin-top: 5rem;
      }
    }

    .image-product {
      transform: translateX(-50px);
    }
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #000000;
    width: 40px;
    height: 40px;
    opacity: 0.5;
    transition: opacity 0.3s;
    position: absolute;
  }

  :deep(.swiper-button-next) {
    @media (min-width: 1200px) {
      right: 150px;
    }
  }

  :deep(.swiper-button-prev) {
    @media (min-width: 1200px) {
      left: 150px;
    }
  }

  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    font-size: 35px;
  }

  @media (max-width: 769px) {
    margin-bottom: 100px;
  }
}
</style>
