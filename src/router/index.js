import Vue from 'vue'
import Router from 'vue-router';
import Login from '@/components/login'
import Home from '@/components/home'
import Editor from '@/components/editor'
import eduList from '@/components/eduList'
import applyCerti from '@/components/applyCerti'
import exportCerti from '@/components/exportCerti'
import userInfo from '@/components/userInfo'
import walletInfo from '@/components/walletInfo'

Vue.use(Router);
export default new Router({
  routes: [
     {
      name: "home",
      path: "/home",
      component: Home,
      children:[
        {
          name: "editor",
          path: "/editor",
          component: Editor
        },
        {
          name: "eduList",
          path: '/eduList',
          component: eduList
        },
        {
          name: "applyCerti",
          path: '/applyCerti',
          component: applyCerti
        },
        {
          name: "exportCerti",
          path: '/exportCerti',
          component: exportCerti
        },
        {
          name: "userInfo",
          path: '/userInfo',
          component: userInfo
        },
        {
          name: "walletInfo",
          path: '/walletInfo',
          component: walletInfo
        },
      ]
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "login",
      path: "/",
      component: Login
    },
   
  ]
})