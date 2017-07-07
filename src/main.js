import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App'
import sess from './sess'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './assets/css/material-font.scss'
import './main.scss'


Vue.use(VueRouter)
Vue.use(VueMaterial)


const router = new VueRouter({
  routes,
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
