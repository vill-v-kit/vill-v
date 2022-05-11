# textEncode

文本转二进制数组
仅支持UTF-8

## Demo

```ts
import { textEncode } from '@vill-v/vanilla'

textEncode('xxxxx')
```

## DTS

```ts
declare const textEncode: (value: string) => Uint8Array | null;
```
