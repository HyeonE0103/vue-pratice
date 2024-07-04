<template>
  <h1>GrandView</h1>
  <div>{{ store }}</div>
  <div>{{ a }}</div>
  <button @click="handleClick">변경 버튼</button>
  <div>{{ num }}</div>
  <button @click="handleClick2">변경 버튼</button>
  {{ flag }}
  <button @click="handleToggle">Toggle Button</button>
  <ParentView :num="num" :flag="flag" />
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import ParentView from '@/views/ParentView.vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useStore()
const { a, b, c, d } = storeToRefs(store)
const num = ref(0)
const flag = ref(false)

function handleClick() {
  store.a = { name: 'hi', value: 'bye' }
  b.value = false
  c.value = 'hi'
  d.value++
}

function handleClick2() {
  num.value++
}

function handleToggle() {
  flag.value = !flag.value
}
</script>

<style scoped></style>
