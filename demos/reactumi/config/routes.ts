

const routes = [
  {
    path: '/login',
    component: './Login',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/home', component: './Home' },
      { path: '/about', component: './About' },
      { path: '/date', component: './Date' },
    ],
  },
];
export default routes;
