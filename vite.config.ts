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
        external: [
          'dayjs',
          'lodash-es',
          'csstype',
          'dayjs/plugin/customParseFormat',
          'dayjs/plugin/duration',
          'dayjs/plugin/arraySupport',
          'dayjs/plugin/isLeapYear',
        ],
        output: {
          globals: {
            dayjs: 'dayjs',
            'dayjs/plugin/customParseFormat': 'dayjs/plugin/customParseFormat',
            'dayjs/plugin/duration': 'dayjs/plugin/duration',
            'dayjs/plugin/arraySupport': 'dayjs/plugin/arraySupport',
            'dayjs/plugin/isLeapYear': 'dayjs/plugin/isLeapYear',
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
