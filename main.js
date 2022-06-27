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

//vant
import { Button } from 'vant';
import { Search } from 'vant'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView);
  app.use(Button);
  app.use(Search)
  return {
    app
  }
}

// #endif

//引入leancloud
const AV = require('leancloud-storage');
const { Query, User } = AV;

//初始化leancloud
// AV.init({
//   appId: "9YsunT1salRS9dw4y0gPdgj8-gzGzoHsz",
//   appKey: "cbTyCF6sMJApRTHjJ68R0Gqz",
//   serverURL: "https://lab.mistletoe.top"
// });
