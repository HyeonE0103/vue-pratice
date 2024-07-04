import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const a = ref({ name: 'name', value: 'value' })
  const b = ref<boolean>(true)
  const c = ref('string')
  const d = ref(0)

  return { a, b, c, d }
})
