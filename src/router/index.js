import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      redirect: '/register',
      children: [{
        path: 'register',
        name: 'Register',
        component: () => import('@/views/login/commponents/register')
      }, {
        path: 'login',
        name: 'LoginChild',
        component: () => import('@/views/login/commponents/login')
      }]
    }, {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home'),
      meta: {title: '首页'},
      children: [
        // {
        //   path: 'homepage',
        //   name: 'HomePage',
        //   component: () => import('@/views/navigation'),
        //   meta: {title: '首页'},
        // },
        {
          path: 'navigation1',
          name: 'navigation1',
          redirect: '/1-1',
          component: () => import('@/views/navigation/navigation1'),
          meta: {title: '导航一'},
          children: [
            {
              path: '/1-1',
              name: '1-1',
              component: () => import('@/views/navigation/navigation1/page1'),
              meta: {title: '页面一'},
            },
            {
              path: '/1-2',
              name: '1-2',
              component: () =>import('@/views/navigation/navigation1/page2'),
              meta: {title: '页面二'},
            },
            {
              path: '/1-3',
              name: '1-3',
              component: () => import('@/views/navigation/navigation1/page3'),
              meta: {title: '页面三'},
            },
          ]
        }
      ],
    }
  ]
})
