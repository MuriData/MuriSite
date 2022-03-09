import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import Unicon from 'vue-unicons'
import { uniLayerGroupMonochrome, uniCarWash } from 'vue-unicons/dist/icons'

Unicon.add([uniLayerGroupMonochrome, uniCarWash])

createApp(App).use(router).use(Unicon).mount('#app')
