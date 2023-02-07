import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import WelcomeView from '../views/WelcomeView.vue'
// 系統管理相關
import User from '../views/system manage/UserView.vue'
import Info from '../views/personal info/InfoView.vue'
import Config from '../views/personal info/ConfigView.vue'
import Chart from '../views/system manage/ChartView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component:LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children : [
      {
        path : '/welcome',
        component : WelcomeView
      },
      {
        path : '/systemmanage/chart',
        component : Chart
      },
      {
        path : '/systemmanage/user',
        component : User
      },
      {
        path : '/personal/info',
        component : Info
      },
      {
        path : '/personal/config',
        component : Config
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
