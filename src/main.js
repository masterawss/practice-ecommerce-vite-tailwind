import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './index.css'
import store from './store/index'
// import "tailwindcss/tailwind.css"
createApp(App).use(store).mount('#app')
