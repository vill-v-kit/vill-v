import type { Plugin } from 'vite'

import { configHmrPlugin } from './hmr'
import { configDtsPlugin } from './dts'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = []

  !isBuild && vitePlugins.push(configHmrPlugin())
  isBuild && vitePlugins.push(configDtsPlugin())

  return vitePlugins
}
