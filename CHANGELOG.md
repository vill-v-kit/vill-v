# Changelog


## v1.1.2...v1.1.3


### 📖 文档

  - Build docs (0362f9b)

### 🏡 框架

  - Generate CHANGELOG.md (80a380e)
  - **build:** 修改打包策略 (edc57d3)
  - Release v1.1.3 (b0025a0)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.1.1...v1.1.2


### 🚀 特性

  - 新增 `resolveImage` 方法异步加载图片 (9a6acc2)

### 📖 文档

  - 新增 resolveImage 文档 (fcf5b5a)

### 🏡 框架

  - Release v1.1.2 (018973c)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.1.0...v1.1.1


### 🚀 特性

  - 修改 `delayAsyncQueue` 记录 返回结果 (643ce75)

### 📖 文档

  - Build docs (5a11e25)

### 🏡 框架

  - Generate CHANGELOG.md (050826c)
  - Release v1.1.1 (8129628)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.1.0 (v1.0.0..v1.1.0)


### 🚀 特性

  - **browser:** ⚠️  `downloadByUrlRequest` 内部实现从 `XMLHttpRequest` 替换为 `fetch`,并修改返回类型为 `Promise` ,用于监听下载完成 (c7bf911)
  - 修改 `downloadByUrlRequest` res.status !== 200 时,返回 Promise.reject (fce1d70)

### 📖 文档

  - Build docs (d90f7a8)
  - 更新 `downloadByUrlRequest` 文档 (fd0cdfd)
  - 修改 文档主题色 (1922355)
  - 增加 版本 显示与changelog链接🔗 (84bea99)

### 🏡 框架

  - 修改 bumpp 规则 (45bc929)
  - Generate CHANGELOG.md (38aa172)
  - 使用 pnpm --filter 进行monorepo打包 (7f0d75e)
  - Release v1.1.0 (f710ffb)

#### ⚠️  Breaking Changes

  - **browser:** ⚠️  `downloadByUrlRequest` 内部实现从 `XMLHttpRequest` 替换为 `fetch`,并修改返回类型为 `Promise` ,用于监听下载完成 (c7bf911)

### ❤️  Contributors

- Whitekite

## v1.0.0 (0.0.2..v1.0.0)


### 🚀 特性

  - **path-prop:** 防止原型链污染 (ac6ea5e)
  - **path-prop:** 导出 `Path` 类型 (61c47df)

### 📖 文档

  - 文档更新 (bf156b9)
  - Update algolia key (91d0d32)
  - Update git link (f9d6228)
  - Build docs (5441812)

### 🏡 框架

  - Release v0.1.6 (f7dc7bc)
  - 将 @whitekite/utils包移至 legacy/whitekite目录 (e6f30e5)
  - 更新.gitignore (8a73ede)
  - 更新release策略 (a2296e3)
  - Release v0.1.7 (9726fb1)
  - Release v0.5.5 (47b45fa)
  - 仓库转移 (2e3d7c1)
  - Release v0.1.8 (f971c1a)
  - Release v0.5.6 (07779ca)
  - Release v0.1.9 (6d279e2)
  - Release v0.5.7 (71b5253)
  - ⚠️  弃用 `@whitekite/utils` ,删除对其的持续支持 (1f6015c)
  - 修改 monorepo 配置 (c1d8f6b)
  - Release v1.0.0 (950af56)

#### ⚠️  Breaking Changes

  - ⚠️  弃用 `@whitekite/utils` ,删除对其的持续支持 (1f6015c)

### ❤️  Contributors

- Whitekite

