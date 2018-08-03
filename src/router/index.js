import Vue from 'vue'
import Router from 'vue-router'

// 引入页面组件，对应 @/views/
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: _import('index'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: _import('indexChild/home')
        },
        {
          path: '/investment',
          name: 'Investment',
          component: _import('indexChild/investment')
        },
        {
          path: '/discovery',
          name: 'Discovery',
          component: _import('indexChild/discovery')
        },
        {
          path: '/mine',
          name: 'Mine',
          component: _import('indexChild/mine')
        }
      ]
    },
    {
      path: '/camera',
      name: 'Camera',
      component: _import('h5plus/camera')
    },
    {
      path: '/messaging',
      name: 'Messaging',
      component: _import('h5plus/messaging')
    },
    {
      path: '/share',
      name: 'Share',
      component: _import('h5plus/share')
    }
  ]
})
