# isStringEquals

是否忽略英文大小写 比对字符串是否相等

## Demo

```ts
import { isStringEquals } from '@vill-v/vanilla'

isStringEquals('xxxx', 'Xxxx') //=>false
isStringEquals('xxxx', 'Xxxx', true) //=>true
```

## DTS

```ts
declare const isStringEquals: (c1: string, c2: string, ignoreCase?: boolean) => boolean;
```
