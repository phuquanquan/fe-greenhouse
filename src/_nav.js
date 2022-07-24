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
    name: 'Quản lý nhà kính',
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
]
