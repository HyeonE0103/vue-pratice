<template>
  <h1>ParentView</h1>
  <div>{{ store }}</div>
  <div>{{ props }}</div>
  <div>{{ props.num }}</div>
  <div>{{ props.flag }}</div>
  <ChildView :num="props.num" :flag="props.flag" />
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
import ChildView from '@/views/ChildView.vue'

const store = useStore()

const props = defineProps<{ num: number; flag: boolean }>()
</script>

<style scoped></style>
