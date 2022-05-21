import { defineConfigWithTheme } from 'vitepress'
import * as fs from 'fs'
import path from 'path'
// @ts-ignore
import baseConfig from '@vue/theme/config'
const getModules = () => {
  const obj = {
    '/modules/': [] as any[],
  }
  const dir = 'docs/modules'
  obj['/modules/'].push({
    text: '模块',
    link: '/modules/',
  })
  fs.readdirSync(path.resolve(dir)).forEach((item) => {
    if (item === 'index.md') {
      return
    }
    const module: any[] = []
    obj['/modules/'].push({
      text: item,
      children: module,
    })
    module.push({
      text: '介绍',
      link: `/modules/${item}/`,
    })
    fs.readdirSync(path.join(dir, item)).forEach((file) => {
      const moduleName = file.replace('.md', '')
      if (file === 'index.md') {
        return
      }
      module.push({
        text: moduleName,
        link: `/modules/${item}/${moduleName}`,
      })
    })
  })

  return obj
}
export default defineConfigWithTheme({
  extends: baseConfig,
  title: 'vill-v',
  lang: 'zh-CN',
  base: '/utils',
  lastUpdated: true,
  vite: { server: { port: 3002 } },
  description: '开发中对于技术的总结，归纳',
  themeConfig: {
    repo: 'https://gitee.com/white-kite/utils',
    repoLabel: 'gitee',
    docsDir: 'docs',
    lastUpdated: '最后更新时间',
    algolia: {
      appId: 'X96S81Q5WC',
      apiKey: 'd1987244be90b6fe1f272e21c194338c',
      indexName: 'white-kite',
    },
    nav: [
      {
        text: '指引',
        link: '/guide/',
      },
      {
        text: '模块',
        link: '/modules/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          children: [
            { text: '动机', link: '/guide/motive' },
            { text: '开始', link: '/guide/' },
          ],
        },
        {
          text: '模块',
          link: '/modules/',
        },
      ],
      ...getModules(),
    },
  },
})
