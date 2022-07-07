export default [
  {
    component: 'CNavItem',
    name: 'Tổng quan',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'success',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Quản lý',
  },
  {
    component: 'CNavItem',
    name: 'Quản lý nhà thông minh',
    to: '/manage/homelist',
    icon: 'cil-house',
  },
  {
    component: 'CNavItem',
    name: 'Quản lý thiết bị',
    to: '/manage/devicelist',
    icon: 'cil-devices',
  },
  {
    component: 'CNavItem',
    name: 'Quản lý tài khoản',
    to: '/manage/userlist',
    icon: 'cil-user',
  },
  {
    component: 'CNavTitle',
    name: 'Điều khiển',
  },
  {
    component: 'CNavGroup',
    name: 'Thủ công',
    to: '/manual',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Đèn điện',
        to: '/manual/light',
      },
      {
        component: 'CNavItem',
        name: 'Quạt điện',
        to: '/manual/electric-fan',
      },
      {
        component: 'CNavItem',
        name: 'Bơm nước',
        to: '/manual/water-pump',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Tự động',
    to: '/automatic',
    icon: 'cil-cursor',
    items: [
      {
        component: 'CNavItem',
        name: 'Hẹn giờ',
        to: '/automatic/timer',
      },
      {
        component: 'CNavItem',
        name: 'Cảm biến',
        to: '/automatic/sensor',
      },
    ],
  },
]
