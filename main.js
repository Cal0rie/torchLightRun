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
import { Dialog } from 'vant';
import { ref } from 'vue';

export function createApp() {
  const app = createSSRApp(App)
  app.use(uView);
  app.use(Button);
  app.use(Search)
  app.use(Dialog);
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
//   appId: "UqpXHTrOW0OBVh1IvuGowWuN-gzGzoHsz",
//   appKey: "HofTE9IcDA9Qmkg1wKqDy5vM",
//   serverURL: "https://uqpxhtro.lc-cn-n1-shared.com"
// });

