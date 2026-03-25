import { createApp } from 'vue'
import './reset.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import clickOutside from './directives/clickOutside'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia) 
app.use(router)
app.directive('click-outside', clickOutside)
app.mount('#app')