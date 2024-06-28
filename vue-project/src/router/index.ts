import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import PostListView from '@/views/posts/PostListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/create',
      component: PostCreateView
    },
    {
      path: '/posts/:id',
      component: PostDetailView
    },
    {
      path: '/posts/:id/edit',
      component: PostEditView
    },
    {
      path: '/posts',
      component: PostListView
    }
  ]
})

export default router
