//举例
import Vue from 'vue'
import Router from 'vue-router'
import Create from '../pages/Create/template.vue'   //@意思是省略了前面的文件
import Detail from '../pages/Detail/template.vue'
import Edit from '../pages/Edit/template.vue'
import Index from '../pages/Index/template.vue'
import Login from '../pages/Login/template.vue'
import My from '../pages/My/template.vue'
import Register from '../pages/Register/template.vue'
import User from '../pages/User/template.vue'

//这里引入组件是我们事先创建好的page页面,一个页面一个文件夹
//比如创建博客页面,@/pages/Create/template.vue

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    },
  ]
})
