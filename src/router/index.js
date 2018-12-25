import Vue from 'vue'
import Router from 'vue-router'
// @表示的src的绝对路径
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 给router对象注册导航收尾
// to：要去哪儿
// from：到哪里去
// next： 是否放行 next ： 方向 next('./login) next(./home)
router.beforeEach((to, from, next) => {
  // 如果是 登陆放行
  // console.log('to',to);
  if (to.path === '/login') {
    next()
    return
  }
  // 如果不是登录 判断是否有token 如果有 放走
  // 如果没有 返回去登录界面
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('./login')
  }
})

export default router
