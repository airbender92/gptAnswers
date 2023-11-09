import { defineConfig } from "umi";
import routes from './routes';

export default defineConfig({
  base: '/',
  publicPath: '/',
  hash: true,
  history: {
    type: 'hash',
  },
  routes,
});
