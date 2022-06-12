# 介绍

开发中总结的类型判断

## 安装

使用npm

```bash
$ npm i @vill-v/type-as
```

使用yarn

```bash
$ yarn add @vill-v/type-as
```

使用pnpm

```bash
$ pnpm add @vill-v/type-as
```

## 可判断的类型

```ts
isBoolean(true)

isError(new Error())

isFunction(() => null)

isMap(new Map())

isNil(null)

isNil(undefined)

isNull(null)

isNumber(1)

isObject({foor: 'bar'})

isSet(new Set())

isString('foor')

isSymbol(new Symbol())

isUndefined(undefined)
```
