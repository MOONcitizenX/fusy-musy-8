import '@fontsource/fira-sans/400.css'
import '@fontsource/fira-sans/700.css'
import '@fontsource-variable/montserrat'

import '@/assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
