//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes  from './routes'
//声明使用vue的插件
Vue.use(VueRouter)

//向外暴露一个路由器对象
export default new VueRouter({
 mode:'history',//'hash',//路由路径带#
 routes
})