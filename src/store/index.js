import Vue from 'vue'
import Vuex from 'vuex'
import Equipment from './equipment/index'
import More from './more'
import Find from './find/index'
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    Equipment,
    More,
    Find
  }
})
