import { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

export default routes
