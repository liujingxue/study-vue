import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'


//-> 新增组件
import GoodsList from './../views/GoodsList.vue'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
