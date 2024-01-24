import { createApp } from 'vue'
import 'normalize.css'
import './app/styles/style.scss'
import App from './App.vue'

import router from './router/index'

createApp(App).use(router).mount('#app')
