/*
 * @Description: 
 * @StartVersion: 2.0
 * @LastVersion: 2.0
 * @Autor: gaoyue
 * @Date: 2023-06-30 15:09:01
 * @LastEditTime: 2023-07-11 18:38:17
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/vue1-page'
    },
    {
        path: '/vue1-page',
        name: 'vue1',
        component: Home
    },
]
const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? 'vue1-admin' : '/',//基础路径
    routes
})
 
export default router