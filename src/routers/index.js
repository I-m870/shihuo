import Vue from 'vue'
import Router from 'vue-router'
import first from './first'
import sale from './sale'
import find from './find'
import equipment from './equipment'
import more from './more'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'first'
      }
    },
    first,
    sale,
    find,
    equipment,
    more
  ]
})