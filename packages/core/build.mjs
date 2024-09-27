import { join, resolve } from 'node:path'
import { globby } from 'globby'
import { mergePackageJson, readPackageJSON } from '@vrx-cp/utils'
import { del, writeTS } from 'void-fs'

const dirs = await globby(['*', '!core'], {
  onlyDirectories: true,
  cwd: resolve(process.cwd(), '..'),
})

const files = {}

const entryFile = []

const dtsFiles = {}

const pkg = await readPackageJSON()

for (const module of dirs) {
  console.log('SCAN', module, 'module')
  files[module] = `export * from '@vill-v/${module}'`
  dtsFiles[module] = `export * from './dist/${module}'`
  entryFile.push(`export * from '@vill-v/${module}'`)
  pkg.exports['./' + module] = {
    types: `./dist/${module}.d.ts`,
    import: `./dist/${module}.mjs`,
    require: `./dist/${module}.js`,
  }
}
console.log('DELETE', 'clean src')

await del(['src', '*.d.ts'])

await Promise.all(
  Object.entries(files).map((item) => writeTS(join('src', item[0] + '.ts'), item[1]))
)

for (const module of dirs) {
  console.log('WRITE', join('src', module + '.ts'))
}

await writeTS(join('src', 'index.ts'), entryFile.join('\n'))

console.log('WRITE', join('src', 'index.ts'))

dtsFiles['index'] = `export * from './dist/index'`
await Promise.all(Object.entries(dtsFiles).map((item) => writeTS(item[0] + '.d.ts', item[1])))

for (const module of dirs) {
  console.log('WRITE', module + '.d.ts')
}

await mergePackageJson({
  exports: pkg.exports,
})

console.log('UPDATE', 'package.json')
