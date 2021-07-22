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
          'crypto-js',
          'csstype',
          'dayjs/plugin/customParseFormat',
          'dayjs/plugin/duration',
          'dayjs/plugin/arraySupport',
          'dayjs/plugin/isLeapYear',
          'crypto-js/aes',
          'crypto-js/enc-utf8',
          'crypto-js/pad-pkcs7',
          'crypto-js/mode-ecb',
          'crypto-js/md5',
          'crypto-js/enc-base64',
        ],
        output: {
          globals: {
            dayjs: 'dayjs',
            'dayjs/plugin/customParseFormat': 'dayjs/plugin/customParseFormat',
            'dayjs/plugin/duration': 'dayjs/plugin/duration',
            'dayjs/plugin/arraySupport': 'dayjs/plugin/arraySupport',
            'dayjs/plugin/isLeapYear': 'dayjs/plugin/isLeapYear',
            'crypto-js/aes': 'crypto-js/aes',
            'crypto-js/enc-utf8': 'crypto-js/enc-utf8',
            'crypto-js/pad-pkcs7': 'crypto-js/pad-pkcs7',
            'crypto-js/mode-ecb': 'crypto-js/mode-ecb',
            'crypto-js/md5': 'crypto-js/md5',
            'crypto-js/enc-base64': 'crypto-js/enc-base64',
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
