<template>
  <div class="breadcrumbs">
    <div class="items">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <p :class="{ link: crumb.isLink }" @click="navigateTo(crumb)" v-if="crumb.isLink">
          {{ crumb.label }}
        </p>
        <p v-else>{{ crumb.label }}</p>
        <p class="slash" v-if="index < breadcrumbs.length - 1">/</p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

// Define the breadcrumbs array
const props = defineProps<{
  breadcrumbs: { label: string; isLink: boolean; path?: string }[]
}>()

// Navigation function for clickable breadcrumbs
function navigateTo(crumb: { label: string; isLink: boolean; path?: string }) {
  if (crumb.isLink && crumb.path) {
    // Navigate to the path
    router.push(crumb.path)
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  background-color: rgba(246, 247, 248, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
}

.items {
  display: flex;
  align-items: flex-start;
}

p {
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 14px;
  white-space: nowrap;
  font-weight: 600;
  line-height: 17px;
  margin-right: 10px;
  letter-spacing: 0.35px;
  cursor: pointer;

  @media (max-width: 769px) {
    font-size: 10px;
  }

  &.link {
    color: rgba(51, 160, 255, 1);
    text-decoration: underline;
  }
}
</style>
