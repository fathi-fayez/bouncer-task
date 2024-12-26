<template>
  <div :class="['popup-overlay', { hidden: !showPopup }]">
    <div class="newsletter grid grid-cols-12">
      <button class="newsletter-close-btn" @click="showPopup = false">X</button>

      <div class="newsletter-content col-span-7">
        <h2 class="newsletter-title">Newsletter</h2>

        <p class="newsletter-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>

        <form>
          <div class="newsletter-form">
            <input
              class="newsletter-input border p-3 w-48"
              type="search"
              name="search"
              placeholder="Email"
            />
            <input
              class="newsletter-submit-btn bg-blue-500 p-3 rounded-tr-md rounded-bl-md cursor-pointer w-36"
              type="submit"
              value="Search"
            />
            <div class="newsletter-checkbox mt-10 mb-5">
              <input class="me-2" type="checkbox" name="showpopup" id="" />
              <label for="showpopup">Don't show this popup again</label>
            </div>
          </div>
        </form>
      </div>

      <div class="newsletter-image col-span-5">
        <img src="../../assets/images/banners/img.jpg" alt="Newsletter" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const showPopup = ref<boolean>(true)
</script>

<style lang="scss" scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1000;
  animation: popup 1s ease-in-out 5s forwards;

  @keyframes popup {
    0% {
      opacity: 0;
      pointer-events: none;
    }
    100% {
      opacity: 1;
      pointer-events: all;
    }
  }
  .newsletter {
    background-color: white;
    width: 900px;
    position: relative;

    .newsletter-close-btn {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 30px;
      height: 30px;
      background-color: white;
      border-radius: 50%;
      background-color: black;
      color: white;
      cursor: pointer;
    }

    .newsletter-content {
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      padding: 60px 60px 0;
      text-align: center;

      .newsletter-title {
        font-size: 2rem;
        margin-bottom: 60px;
      }

      .newsletter-text {
        font-size: 1.2rem;
        margin-bottom: 40px;
      }
    }

    .newsletter-image {
      img {
        max-width: 100%;
      }
    }
  }
}
.hidden {
  display: none;
}
</style>
