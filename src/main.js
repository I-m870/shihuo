import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import store from "./store/index"
import Head from "@/common/head"
import HotActive from "@/common/hotActive"
import listSecond from "@/common/listSecond"
import List from "@/common/list"
import BScroll from "@/common/BScroll"

Vue.config.productionTip = false
Vue.component("Head", Head)
Vue.component("HotActive", HotActive)
Vue.component("listSecond", listSecond)
Vue.component("List", List)
Vue.component("BScroll", BScroll)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')