<template>
  <h1>제목</h1>
  <p>내용</p>
  <p class="text-muted"></p>
  <hr class="my-4" />
  <div class="row g-2">
    <div class="col-auto">
      <button class="btn btn-outline-dark">이전글</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-dark">다음글</button>
    </div>
    <div class="col-auto me-auto"></div>
    <div class="col-auto">
      <button class="btn btn-outline-dark" @click="goPage('PostList')">
        목록
      </button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-primary" @click="goPage('PostEdit')">
        수정
      </button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-danger">삭제</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goPage = (name) => {
  if (name === 'PostList') router.push({ name: 'PostList' })
  router.push({ name: 'PostEdit', params: route.params })
}
</script>

<style lang="scss" scoped></style>
