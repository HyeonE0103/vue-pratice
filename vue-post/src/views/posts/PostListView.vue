<template>
  <h1>조회</h1>
  <hr class="my-4" />
  <div class="row g-3">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <PostItem
        :title="post.title"
        :content="post.content"
        :createdAt="post.createdAt"
        @click="goPage(post.id)"
      ></PostItem>
    </div>
  </div>
</template>

<script setup>
import { getPosts } from '@/api/posts'
import PostItem from '@/components/posts/PostItem.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const posts = ref([])
const fetchPosts = () => {
  posts.value = getPosts()
}
fetchPosts()

const goPage = (id) => {
  // router.push(`/posts/${id}`)
  router.push({
    name: 'PostDetail',
    params: {
      id
    }
  })
}
</script>

<style lang="scss" scoped></style>
