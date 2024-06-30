<template>
  <h1>생성</h1>
  <hr class="my-4" />
  <form @submit.prevent="save">
    <div class="mb-3">
      <label for="title" class="form-label">제목😎</label>
      <input type="text" class="form-control" id="title" v-model="form.title" />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        class="form-control"
        id="content"
        rows="3"
        v-model="form.content"
      ></textarea>
    </div>
    <div class="pt-4">
      <button
        type="button"
        class="btn btn-outline-dark me-3"
        @click="goListPage"
      >
        목록
      </button>
      <button class="btn btn-primary">저장</button>
    </div>
  </form>
</template>

<script setup>
import { createPost } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ title: null, content: null })

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now()
    })
    router.push({ name: 'PostList' })
  } catch (error) {
    console.log(error)
  }
}

const goListPage = () => router.push({ name: 'PostList' })
</script>

<style lang="scss" scoped></style>
