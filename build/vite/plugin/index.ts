import type { Plugin } from 'vite'

import { configHmrPlugin } from './hmr'
import dts from 'vite-plugin-dts'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = []

  !isBuild && vitePlugins.push(configHmrPlugin())
  isBuild && vitePlugins.push(dts({ outputDir: 'dist/types/utils' }))

  return vitePlugins
}
