import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { UserConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

const config: UserConfig = {
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
};

const getConfig = () => config;

export default getConfig;
