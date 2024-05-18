# 介绍

开发中总结的类型判断

## 简单使用

```ts
import {} from 'vill-v/type-as'
```

## 独立安装

:::code-group

```bash [npm]
$ npm i @vill-v/type-as
```

```bash [yarn]
$ yarn add @vill-v/type-as
```

```bash [pnpm]
$ pnpm add @vill-v/type-as
```

:::

## 可判断的类型

```ts twoslash
// @noErrors
import {isBoolean,isError,isFunction,isMap,isNil,isNull,isNumber,isObject,isSet,isString,isSymbol,isUndefined} from '@vill-v/type-as'

// ---cut---
isBoolean(true)

isError(new Error())

isFunction(() => null)

isMap(new Map())

isNil(null)

isNil(void 0)

isNull(null)

isNumber(1)

isObject({ foor: 'bar' })

isSet(new Set())

isString('foor')

isSymbol(new Symbol())

isUndefined()
```
