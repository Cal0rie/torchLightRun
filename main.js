import App from './App.vue'
import uView from './uni_modules/vk-uview-ui';


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
Vue.use(uView);
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uView);
  return {
    app
  }
}

// #endif