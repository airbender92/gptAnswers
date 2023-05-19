import { defineConfig } from "umi";
import routes from './routes';

export default defineConfig({
  base: '/umi/',
  publicPath: '/',
  hash: true,
  history: {
    type: 'hash',
  },
  routes,
});
