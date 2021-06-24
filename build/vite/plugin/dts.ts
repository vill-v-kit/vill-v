import dts from 'vite-plugin-dts'
import type { Plugin } from 'vite'
import path from 'path'

const rootUrl = process.cwd()

const buildOutputDir = 'dist/types'

const buildOutputFullPath = `${rootUrl}/${buildOutputDir}`

const projectRoot = 'src'

const includeExt = ['.ts', '.d.ts']
const include = includeExt.map((ext) => `${projectRoot}/**/*${ext}`)

const createWriteFilePath = (filePath: string) =>
  path.resolve(buildOutputFullPath, path.relative(buildOutputFullPath + projectRoot, filePath))

export function configDtsPlugin(): Plugin {
  return dts({
    outputDir: buildOutputDir,
    include,
    beforeWriteFile: (filePath, content) => ({
      filePath: createWriteFilePath(filePath),
      content,
    }),
  })
}
