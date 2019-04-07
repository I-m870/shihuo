import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import store from "./store/index"
import Head from "@/common/head"
import HotActive from "@/common/hotActive"
import listSecond from "@/common/listSecond"
import List from "@/common/list"

Vue.config.productionTip = false
Vue.component("Head",Head)
Vue.component("HotActive",HotActive)
Vue.component("listSecond",listSecond)
Vue.component("List",List)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
