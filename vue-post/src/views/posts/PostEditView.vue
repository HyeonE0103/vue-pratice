<template>
  <h1>게시글 수정</h1>
  <hr class="my-4" />
  <form @submit.prevent>
    <div class="mb-3">
      <label for="title" class="form-label">제목😎</label>
      <input type="text" class="form-control" id="title" />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea class="form-control" id="content" rows="3"></textarea>
    </div>
    <div class="pt-4">
      <button
        type="button"
        class="btn btn-outline-dark me-3"
        @click="goDetailPage"
      >
        취소
      </button>
      <button type="button" class="btn btn-primary">수정</button>
    </div>
  </form>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goDetailPage = () =>
  router.push({ name: 'PostDetail', params: route.params })
</script>

<style lang="scss" scoped></style>
