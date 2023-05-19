

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
    ],
  },
];
export default routes;
