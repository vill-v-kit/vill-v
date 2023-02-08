import { defineConfig } from 'vitepress'
import * as fs from 'fs'
import path from 'path'
import pkg from '../../package.json'
const getModules = () => {
  const obj = {
    '/modules/': [] as any[],
  }
  const dir = 'docs/modules'
  obj['/modules/'].push({
    text: '模块',
    items: [{ text: '模块', link: '/modules/' }],
  })
  fs.readdirSync(path.resolve(dir)).forEach((item) => {
    if (item === 'index.md') {
      return
    }
    const module: any[] = []
    obj['/modules/'].push({
      text: item,
      items: module,
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
export default defineConfig({
  title: 'vill-v',
  lang: 'zh-CN',
  base: '/core/',
  lastUpdated: true,
  vite: { server: { port: 3002 } },
  description: '开发中对于技术的总结，归纳',
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    algolia: {
      appId: 'A1A18HNLQ4',
      apiKey: '76d659bc7b9afbb6ea9e937cdfe1d488',
      indexName: 'vill-v',
    },
    socialLinks: [{ link: 'https://gitee.com/vill-v/core', icon: 'github' }],
    outline: {
      label: '本页',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '暗色模式',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present White Kite',
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
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://gitee.com/vill-v/core/blob/master/CHANGELOG.md',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '动机', link: '/guide/motive' },
            { text: '开始', link: '/guide/' },
          ],
        },
        {
          text: '模块',
          items: [
            {
              text: '模块',
              link: '/modules/',
            },
          ],
        },
      ],
      ...getModules(),
    },
  },
})
