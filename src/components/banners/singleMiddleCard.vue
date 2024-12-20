<template>
  <div class="cardContainer flex flex-col items-center h-full shadow-lg">
    <img
      src="/src/assets/images/banners/Oculus-Rift-profile_grande.png"
      alt="Oculus Rift"
      class="w-full"
    />
    <div class="text flex items-center justify-around w-full">
      <h4 class="text-lg font-semibold">Oculus Rift</h4>
      <h5 class="text-lg font-bold">$349</h5>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cardContainer {
  background-color: white;

  img {
    width: 250px;
  }
}
</style>
