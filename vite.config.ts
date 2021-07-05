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
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'seeleUtils',
      },
      rollupOptions: {
        external: ['vue-types', 'moment', 'lodash-es', 'crypto-js', 'csstype'],
        output: {
          globals: {
            'vue-types': 'vue-types',
            moment: 'moment',
            'lodash-es': 'lodash-es',
            'crypto-js': 'crypto-js',
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
