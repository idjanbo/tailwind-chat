import router from '/@/router'
import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import { setupStore } from '/@/store'

const app = createApp(App)
setupStore(app)
app.use(router).mount('#app')
