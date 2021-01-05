import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: 'index',
    component: () => import('@/components/baseLayout.vue'),
    children: [
      { path: '/index', name: 'Index', component: () => import(/* webpackChunkName: "index" */ '@/views/index/index.vue') },
      { path: '/product', name: 'Product', component: () => import(/* webpackChunkName: "product" */ '@/views/product/index.vue') },
      { path: '/shop', name: 'Shop', component: () => import(/* webpackChunkName: "shop" */ '@/views/shop/index.vue') },
      { path: '/my', name: 'My', component: () => import(/* webpackChunkName: "my" */ '@/views/my/index.vue') },
    ]
  },
  { path: '/login', name: 'Login', component: () => import('@/views/login/index.vue') },
  { path: '/error', component: () => import('@/views/404.vue') }
]

export default routes