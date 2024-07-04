<template>
  <div>
    <h1>ChildView</h1>
    <div>{{ store }}</div>
    <div>{{ props.num }}</div>
    <div>{{ props.flag }}</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()

const props = defineProps<{ num: number; flag: boolean }>()
</script>

<style scoped></style>
