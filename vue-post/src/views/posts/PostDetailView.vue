<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.content }}</p>
  <p class="text-muted">{{ post.createdAt }}</p>
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
      <button class="btn btn-outline-danger" @click="remove">삭제</button>
    </div>
  </div>
</template>

<script setup>
import { deletePost, getPsotById } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number
})

const router = useRouter()
const post = ref({})
// ref로 하면 한번에 변경(객체할당)가능한데 reactive로 한번에 하면 반응형을 잃기 때문에
// data를 하나하나 변경해주어야 함 ex)data.title 하지만 value 안붙여주어도 됨

const fetchPost = async () => {
  try {
    const { data } = await getPsotById(props.id)
    post.value = { ...data }
  } catch (error) {
    console.log(error)
  }
}

fetchPost()

const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?') === false) return //depth

    await deletePost(props.id)
    router.push({ name: 'PostList' })
  } catch (error) {
    console.log(error)
  }
}

const goPage = (name) => {
  if (name === 'PostList') router.push({ name: 'PostList' })
  else router.push({ name: 'PostEdit', params: { id: props.id } })
}
</script>

<style lang="scss" scoped></style>
