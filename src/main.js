//   入口

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标样式
import './assets/fonts/iconfont.css'
// 导入全局样式
import './assets/css/global.css'
// 调用接口
import axios from 'axios'
// 配置请求的根路径
// axios.defaults.baseURL = 'http://192.168.88.122:8888/api/private/v1/'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 请求拦截器

axios.interceptors.request.use((config) => {
        // console.log(config)
        config.headers.Authorization = window.sessionStorage.getItem('token')
            // 在最后必须 return config
        return config
    })
    // 响应拦截器
axios.interceptors.response.use((res) => {
        if (res.data.meta.msg === '无效token' && res.data.meta.status === 400) {
            location.href = './#/login'
        }
        return res
    })
    // !挂载原型方法
Vue.prototype.$http = axios
    // 阻止启动产生消息
Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')