# textDecode

二进制数组转文本

## Demo

```ts twoslash
import { textDecode } from '@vill-v/vanilla'

textDecode(new Uint8Array(8), 'utf-8')
```

## DTS

```ts
declare type DefaultCharSet = 'utf-8' | 'utf8' | 'UTF-8' | 'gbk' | 'GBK' | 'GB2312' | string;
declare const textDecode: (value: Uint8Array, charSet: DefaultCharSet) => string;
```
