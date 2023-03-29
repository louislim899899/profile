import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import eslint from 'vite-tsconfig-paths';

const path = require('path')

export default defineConfig({
    resolve:{
        alias:{
          '@' : path.resolve(__dirname, './src')
        },
      },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslint()],
})
