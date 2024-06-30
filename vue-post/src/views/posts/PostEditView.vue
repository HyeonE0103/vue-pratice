<template>
  <h1>게시글 수정</h1>
  <hr class="my-4" />
  <form @submit.prevent="edit">
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
        @click="goDetailPage"
      >
        취소
      </button>
      <button class="btn btn-primary">수정</button>
    </div>
  </form>
</template>

<script setup>
import { getPsotById, updatePost } from '@/api/posts'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const form = ref({ title: null, content: null })

const fetchPost = async () => {
  try {
    const { data } = await getPsotById(route.params.id)
    form.value = { ...data }
  } catch (error) {
    console.log(error)
  }
}

fetchPost()

const edit = async () => {
  try {
    await updatePost(route.params.id, { ...form.value })
    router.push({ name: 'PostDetail', params: { id: route.params.id } })
  } catch (error) {
    console.log(error)
  }
}

const goDetailPage = () =>
  router.push({ name: 'PostDetail', params: route.params })
</script>

<style lang="scss" scoped></style>
