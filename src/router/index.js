import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../conponent/Login.vue'
// 注册路由组件
Vue.use(VueRouter)
    // 父组件
const routes = [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login }
    ]
    // 路由实例
const router = new VueRouter({
    routes
})

export default router