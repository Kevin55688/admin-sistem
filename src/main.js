import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
const app = createApp(App)
import global from '@/utils/global'
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './http'
import CKEditor from '@ckeditor/ckeditor5-vue';
app.config.globalProperties.$global = global
app.config.globalProperties.$axios = http

loadFonts()

app.use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(CKEditor)
  .mount('#app')
