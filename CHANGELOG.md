# Changelog


## v1.3.0


### 🚀 特性

- **path-prop:** 完善 getByPath ts 类型 (13ab62d)
- **path-prop:** 路径支持解析 `['foo.bar']` 类型路径 (a327cc8)

### 🩹 修复

- **ts:** 修复`TsEnumText.select` 类型错误 (f637975)

### 📖 文档

- Build docs (1fd45d8)
- Update docs (f29e4d5)
- Update docs (450836e)

### ✅ 测试

- **path-prop:** 添加 单元测试 (eccf638)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.5


### 🚀 特性

- **broswer:** `blobToJson` 可以根据兼容性自适应使用更现代的  `blob.text()` 特性 ，并开放 `blobToJsonModern` `blobToJsonLegacy`  函数支持直接分别调用新老 特性 (d06e13e)

### 📖 文档

- Build docs (1fe8653)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.4


### 🩹 修复

- 修复 `vill-v` 模块 推送配置错误 (b659a48)

### 📖 文档

- Build docs (fad5c4b)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.3


### 🚀 特性

- `vill-v` 包支持子路径按需加载所有包 (97f7a1f)

### 📖 文档

- Build docs (20c0b6c)
- Fix docs error (84da4b6)
- Build docs (4032b86)
- Update docs (a801df0)
- Build docs (9fe8997)
- Build docs (a07ee1c)
- Build docs (d0fe77e)
- Build docs (bad53ff)
- Build docs (dc83479)
- Change search algolia to local (0174e47)
- Fix nav active match error (0343985)
- Update docs (3bd9692)

### 🏡 框架

- **eslint:** Fix code with new rules (9eedc1f)

### ❤️  贡献者

- Whitekite <1075790909@qq.com>

## v1.2.2


### 📖 文档

  - 优化文档中文支持 (79f9cba)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.2.1


### 🚀 特性

  - Add `lastOfArray`, `omit`,`pick` (907c603)
  - Update `lastOfArray`, `omit`,`pick` unit test (9b3293f)

### 📖 文档

  - Build docs (96d40ad)
  - Add `lastOfArray`, `omit`,`pick` (45cd7e2)

### 🏡 框架

  - Generate CHANGELOG.md (0c739b6)
  - Update repository README.md (88d3b3f)
  - Update `release` script (9733b4c)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>

## v1.1.3...v1.2.0


### 🚀 特性

  - **date:** ⚠️  所有插件完全按需调用，不再默认装载 (021cc00)
  - **vanilla:** ToArray 方法在入参类型 为 array时，将直接返回入参 (34699d5)
  - **vanilla:** 新增 asArray 方法，将任何入参包装成数组 (4ab0c6a)
  - **vanilla:** `isEmpty` 当入参为 null (undefined 时，直接返回 true)
  - **broswer:** 新增 `createStorageCache` 方法 作为 `StorageCache` 的函数式调用方法 (239ff55)
  - **broswer:** 新增 `LocalStorageCache`,`createLocalStorageCache`  作为 `StorageCache` 的 localStorage 预设 (72408e2)
  - **broswer:** 新增 `SessionStorageCache`,`createSessionStorageCache`  作为 `StorageCache` 的 sessionStorage 预设 (c4ac221)
  - **broswer:** 优化 模块导出 (144a90b)
  - **path-prop:** 导出路径解析器 (d9373c3)
  - **broswer:** 导出raf 方法的别名 wrapperRaf (ea4e40a)

### 📖 文档

  - Build docs (25ba271)
  - 更新部分文档 (aa47a70)

### 🏡 框架

  - Generate CHANGELOG.md (6255d22)
  - .gitignore 忽略 docs/.vitepress/cache (fec3aaa)
  - Release v1.2.0 (f35aca4)

#### ⚠️  Breaking Changes

  - **date:** ⚠️  所有插件完全按需调用，不再默认装载 (021cc00)

### ❤️  Contributors

- Whitekite <1075790909@qq.com>
- C9f5a3d <whitekite>

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

