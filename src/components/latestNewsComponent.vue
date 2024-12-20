<template>
  <div>
    <h1 class="text-center mb-12 font-bold text-2xl">LATEST NEWS</h1>
    <div
      class="news-container container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <!-- news box -->
      <div class="news-box">
        <img src="../assets/images/News images/Rectangle 1 copy 25-1.png" alt="" />
        <div class="content my-10">
          <span>01 jan, 2024</span>
          <h5>Typesetting industry</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <!-- news box -->
      <div class="news-box">
        <img src="../assets/images/News images/Rectangle 1 copy 25-2.png" alt="" />
        <div class="content my-10">
          <span>01 jan, 2024</span>
          <h5>Typesetting industry</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
      <!-- news box -->
      <div class="news-box">
        <img src="../assets/images/News images/Rectangle 1 copy 25.png" alt="" />
        <div class="content my-10">
          <span>01 jan, 2024</span>
          <h5>Typesetting industry</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.news-container {
  margin-bottom: 150px;

  .news-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 160px;
      max-width: 100%;
      margin-right: 20px;
    }

    .content {
      span {
        color: var(--gray-text-color);
      }

      h5 {
        font-weight: bold;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      p {
        line-height: 1.6;
      }
    }
  }
}
</style>
