import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import router from './router'
import store from './store'
import 'boxicons/css/boxicons.min.css'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
