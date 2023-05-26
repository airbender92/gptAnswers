import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled
} from '@ant-design/icons'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/home',
        name: '欢迎',
        icon: <SmileFilled />,
        component: './Home',
      },
      {
path: '/about',
        name: 'about',
        icon: <SmileFilled />,
        component: './About',
      }
    ]
  },
  location: {
    pathname: '/',
  },
  appList: [

  ]
}
