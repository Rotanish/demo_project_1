import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Gen Docx',
    component: () => import('@/views/GenerateDocx.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.onlyAdmin)) {
    store.dispatch('whoami').then(() => {
      if (store.getters.isAdmin) {
        next()
        return
      }
      next('/')
      return
    })
  }
  if (to.matched.some((record) => record.meta.auth)) {
    store.dispatch('whoami').then(() => {
      if (store.getters.auth) {
        next()
        return
      }
      next('/login')
      return
    })
  }
  next()
})

export default router
