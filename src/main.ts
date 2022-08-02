import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './samples/node-api'

import { createPinia } from 'pinia'
const pinia = createPinia()

import 'virtual:windi.css'

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
