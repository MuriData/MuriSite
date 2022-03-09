import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import Unicon from 'vue-unicons'
import { uniAngleRight } from 'vue-unicons/dist/icons'

Unicon.add([uniAngleRight])

createApp(App).use(router).use(Unicon).mount('#app')
