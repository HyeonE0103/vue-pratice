<template>
  <h2>Home</h2>
  <p>{{ $route.path }}</p>
  <button class="btn btn-primary" @click="goAboutPage('/about')">
    About으로 이동
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goAboutPage = (path) => {
  router.push(path)
}
</script>

<style lang="scss" scoped></style>
