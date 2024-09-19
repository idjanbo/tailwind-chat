import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:someType/:fooId',
    name: 'Cashier',
    component: () => import('/@/views/home/index.vue'),
  },
  {
    path: '/validate/:fooId',
    name: 'Validate',
    component: () => import('/@/views/validate/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('/@/views/error/404.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('/@/views/error/403.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'NotFound',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
