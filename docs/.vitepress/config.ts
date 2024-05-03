import * as fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'
import UnoCss from 'unocss/vite'
import { presetUno } from 'unocss'
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
      collapsed: true,
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
  base: '/vill-v/',
  lastUpdated: true,
  vite: { server: { port: 3002 }, plugins: [UnoCss({ presets: [presetUno()] })] },
  description: '开发中对于技术的总结，归纳',
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      {
        link: 'https://github.com/vill-v-kit/vill-v',
        icon: 'github',
      },
    ],
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
        activeMatch: '^/guide/',
      },
      {
        text: '模块',
        link: '/modules/',
        activeMatch: '^/modules/',
      },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/vill-v-kit/vill-v/blob/master/CHANGELOG.md',
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
