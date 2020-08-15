import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articulo from './views/Articulo.vue'
import Contacto from './views/Contacto.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:number',
      name: 'articulo',
      component: Articulo
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
