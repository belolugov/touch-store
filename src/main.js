import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueMq from 'vue-mq'
import VueRouter from 'vue-router'
import store from './store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ProductPage from "@/components/ProductPage";
import Gallery from "@/components/Gallery";
import Cart from "@/components/cart/Cart";

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

const routes = [
  {
    name: 'product-page', path: '/product/:id', component: ProductPage, meta: {
      title: "product"
    }
  },
  {
    name: 'Gallery',path: '/', component: Gallery, meta: {
      title: "Gallery"
    }
  },
  {
    name: 'Cart',path: '/cart', component: Cart, meta: {
      title: "Your Cart"
    }
  }
];

const router = new VueRouter({
  routes:routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})



new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
