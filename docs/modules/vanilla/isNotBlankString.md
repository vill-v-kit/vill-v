# isBlankString

判断字符串是否为空

比起 `!''` 以外
额外判断 `'', ' ', '\t', '\r', '\n', '\f', '\ufeff', '\u202a', '\u0000'` 认为这些内容为空

## Demo

```ts twoslash
import { isNotBlankString } from '@vill-v/vanilla'

isNotBlankString(' \r\n') // =>false
```

## DTS

```ts
declare const isNotBlankString: (str?: string | null | undefined) => str is string;
```
