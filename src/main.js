import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'


import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import VueCookies from 'vue-cookies'


const app = createApp(App)

app.use(VueCookies, { expires: '1d' })
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(VueTheMask)

app.mount('#app')
