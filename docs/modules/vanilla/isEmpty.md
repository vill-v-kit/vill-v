# isEmpty

是否为空

::: tip 提示

暂时只支持 string map set object array 的转换
:::

## Demo

```ts
import {
  isEmpty,
  isSetEmpty,
  isMapEmpty,
  isObjectEmpty,
  isStringEmpty,
  isArrayEmpty
} from '@vill-v/vanilla'

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
declare const isArrayEmpty: (value: any[]) => boolean;
declare const isStringEmpty: (value: string) => boolean;
declare const isObjectEmpty: (value: Record<string, any>) => boolean;
declare const isMapEmpty: (value: Map<any, any>) => boolean;
declare const isSetEmpty: (value: Set<any>) => boolean;
declare const isEmpty: (value: any) => boolean;
```
