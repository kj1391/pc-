//入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'

//注册全局组件
Vue.component('TypeNav',TypeNav)//全局使用大写小写(小写中间加——)
new Vue({
  //el:'#app'
  render:h=>h(App),
  router,//配置路由器
}).$mount('#app')