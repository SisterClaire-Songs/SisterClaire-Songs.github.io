import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import { router } from './router/router.js' // Vue Router
import store from './store/store.js' // Vuex store
import App from './components/App/app.vue' // require components using webpack alias

import 'theme/index.css' // generated Element-UI theme
import 'normalize.css' // normalize
import 'whatwg-fetch' // polyfill
import 'material-design-icons' // material icons, because Element-UI icons set is incomplete
import 'styles/index.scss' // require styles using webpack alias

Vue.config.devtools = true

sync(store, router)
Vue.use(Element, { locale })

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
