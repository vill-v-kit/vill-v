import type { UserConfig, ConfigEnv } from 'vite'

import { createVitePlugins } from './build/vite/plugin'
import path from 'path'

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    base: '/',
    server: {
      host: true,
      port: 8080,
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/main.ts'),
        name: 'seeleUtils',
      },
      rollupOptions: {
        external: ['vue-types', 'moment', 'lodash-es'],
        output: {
          globals: {
            'vue-types': 'vue-types',
            moment: 'moment',
            'lodash-es': 'lodash-es',
          },
        },
      },
      target: 'es2015',
      brotliSize: true,
      chunkSizeWarningLimit: 2000,
    },
    plugins: createVitePlugins(isBuild),
  }
}
