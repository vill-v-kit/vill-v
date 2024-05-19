# @vill-v/path-prop

neta了崩坏3 往世乐土的英杰维尔薇

<!-- automd:badges color="orange" license licenseBranch  bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@vill-v/path-prop?color=orange)](https://npmjs.com/package/@vill-v/path-prop)
[![npm downloads](https://img.shields.io/npm/dm/@vill-v/path-prop?color=orange)](https://npmjs.com/package/@vill-v/path-prop)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@vill-v/path-prop?color=orange)](https://bundlephobia.com/package/@vill-v/path-prop)
[![license](https://img.shields.io/github/license/vill-v-kit/vill-v?color=orange)](https://github.com/vill-v-kit/vill-v/blob/true/LICENSE)

<!-- /automd -->

**一个基于路径字符串对对象进行操作的工具**

## 安装
<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @vill-v/path-prop

# npm
npm install @vill-v/path-prop

# yarn
yarn add @vill-v/path-prop

# pnpm
pnpm install @vill-v/path-prop

# bun
bun install @vill-v/path-prop
```

<!-- /automd -->

## 说明

_只是个人项目，整体较为随便，作为开发途中的经验总结，如有相似的需求，推荐copy或阅读源码，不建议将该包在实际项目中使用_

**如有幸被实际使用在项目内，不胜荣幸**

```ts

const obj = {test: [{test1: 'test2'}]}

getByPath(obj, 'test[0].test1')
// -> test2

const obj1 = {test: [{test1: 'test2'}]}

setByPath(obj1, 'test[0].test1', 'test3')
// obj -> {test: [{test1: 'test3'}]}

const obj2 = {test: [{test1: 'test2'}]}

delByPath(obj2, 'test[0]')

// obj -> {test: []}

const obj3 = {test: [{test1: 'test2'}]}

hasByPath(obj3, 'test[0].test1')
// -> true
```

<!-- automd:contributors author="Colourlessglow" license="MIT" -->

Published under the [MIT](https://github.com/vill-v-kit/vill-v/blob/main/LICENSE) license.
Made by [@Colourlessglow](https://github.com/Colourlessglow) and [community](https://github.com/vill-v-kit/vill-v/graphs/contributors) 💛
<br><br>
<a href="https://github.com/vill-v-kit/vill-v/graphs/contributors">
<img src="https://contrib.rocks/image?repo=vill-v-kit/vill-v" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
