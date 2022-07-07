import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Tổng quan',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/manage',
        name: 'Quản lý',
        redirect: '/manage/homelist',
      },
      {
        path: '/manage/homelist',
        name: 'Quản lý danh sách nhà thông minh',
        component: () => import('@/views/manage/ManageHomeList.vue'),
      },
      {
        path: '/manage/devicelist',
        name: 'Quản lý danh sách thiết bị',
        component: () => import('@/views/manage/ManageDeviceList.vue'),
      },
      {
        path: '/manage/userlist',
        name: 'Quản lý danh sách tài khoản',
        component: () => import('@/views/manage/ManageUserList.vue'),
      },
      {
        path: '/manual',
        name: 'Thủ công',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/manual/light',
        children: [
          {
            path: '/manual/light',
            name: 'Đèn điện',
            component: () => import('@/views/control/manual/GLight.vue'),
          },
          {
            path: '/manual/electric-fan',
            name: 'Quạt điện',
            component: () => import('@/views/control/manual/GElectricFan.vue'),
          },
          {
            path: '/manual/water-pump',
            name: 'Bơm nước',
            component: () => import('@/views/control/manual/GWaterPump.vue'),
          },
        ],
      },
      {
        path: '/automatic',
        name: 'Tự động',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/automatic/timer',
        children: [
          {
            path: '/automatic/timer',
            name: 'Hẹn giờ',
            component: () => import('@/views/control/automatic/GTimer.vue'),
          },
          {
            path: '/automatic/sensor',
            name: 'Cảm biến',
            component: () => import('@/views/control/automatic/GSensor.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
