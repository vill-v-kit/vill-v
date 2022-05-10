# downloadImageByBase64

下载base64图片

## Demo

```ts
import {downloadImageByBase64} from '@vill-v/broswer'

downloadImageByBase64('data:base64', 'xxx.png')
```

## DTS

```ts

declare function downloadImageByBase64(buf: string, filename: string, mime?: string, bom?: BlobPart): void;
```
