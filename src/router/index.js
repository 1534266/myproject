import Vue from 'vue'
import Router from 'vue-router'
import Login from '../conponent/Login.vue'
import Home from '../conponent/Home.vue'
import Welcome from '../conponent/Welcome.vue'
import Users from '../conponent/user/User.vue'
import Rights from '../conponent/power/Rights.vue'
import Roles from '../conponent/power/Roles.vue'
import Cate from '../conponent/power/Cate.vue'

import { refreshStyles } from 'less'
import VueRouter from 'vue-router'

// 注册路由组件
Vue.use(Router)
    // 路由实例
const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        // home组件展示welcome子组件
        children: [{
                path: '/welcome',
                component: Welcome
            },
            {
                path: '/users',
                component: Users
            },
            {
                path: '/rights',
                component: Rights
            },
            {
                path: '/roles',
                component: Roles
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

//  挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to 将要访问的路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数，表示放行
    //    next()  放行    next('/login')  强制跳转

    if (to.path === '/login') return next()
        // 获取token,如果token不存在,就跳转登录页面
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

export default router