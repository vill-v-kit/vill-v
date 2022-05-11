# isBlankChar

判断单字符是否为空

比起 `!''` 以外
额外判断 `'', ' ', '\t', '\r', '\n', '\f', '\ufeff', '\u202a', '\u0000'` 认为这些内容为空

## Demo

```ts
import { isBlankChar } from '@vill-v/vanilla'

isBlankChar('\r') // =>true
```

## DTS

```ts
declare const isBlankChar: (c: string) => boolean;
```
