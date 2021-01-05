import { createRouter, createWebHistory } from 'vue-router'

import routes from './router';
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  //是否前去登陆页
  if (to.path == "/login") {
    next();
  } else {
    const token = localStorage.getItem('token') || '';
    if (token) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router
