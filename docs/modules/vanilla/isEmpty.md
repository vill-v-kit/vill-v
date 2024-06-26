# isEmpty

是否为空

::: tip 提示

暂时只支持 string map set object array 的转换

<!-- prettier-ignore -->
:::

## Demo

```ts twoslash
import {
  isArrayEmpty,
  isEmpty,
  isMapEmpty,
  isObjectEmpty,
  isSetEmpty,
  isStringEmpty,
} from '@vill-v/vanilla'

isEmpty(null) // =>true
isEmpty(void 0) // =>true

isSetEmpty(new Set()) // =>true
isEmpty(new Set()) // =>true

isMapEmpty(new Map()) // =>true
isEmpty(new Map()) // =>true

isObjectEmpty({}) // =>true
isEmpty({}) // =>true

isStringEmpty('') // =>true
isEmpty('') // =>true

isArrayEmpty([]) // =>true
isEmpty([]) // =>true
```

## DTS

```ts
declare const isArrayEmpty: (value: any[]) => boolean
declare const isStringEmpty: (value: string) => boolean
declare const isObjectEmpty: (value: Record<string, any>) => boolean
declare const isMapEmpty: (value: Map<any, any>) => boolean
declare const isSetEmpty: (value: Set<any>) => boolean
declare const isEmpty: (value: any) => boolean
```
