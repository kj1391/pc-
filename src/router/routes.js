//所有路由配置的数组模块
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default [
    {
      path:'/',
      component:Home
    },
    {
      name:'search',
      path:'/search/:keyword?',
      component:Search,
      //将query  params参数映射成props传递给路由组件
      props:(route)=>({ keyword1:route.params.keyword,keyword2:route.query.keyword2})
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHideFooter:true,
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHideFooter:true,
      }
    },
]