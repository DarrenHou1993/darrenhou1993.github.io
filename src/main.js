import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App'
import sess from './sess'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
