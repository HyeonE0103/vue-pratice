import { createApp } from 'vue'
import { createPinia } from 'pinia'
import EVUI from 'evui'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(EVUI)

app.mount('#app')
