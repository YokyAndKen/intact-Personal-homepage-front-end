import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'

import 'element-plus/theme-chalk/el-message.css';


createApp(App).use(store).use(router).mount('#app') 
