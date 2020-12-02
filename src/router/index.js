import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@components/layout/main-layout.vue'
import Home from '@views/Home.vue'
import Project from '@views/project/project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/main',
    component: MainLayout,
    children: [
      {path: 'home', component: Home},
      {path: 'project', component: Project}
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
