# imgDataURLtoBlob

`data:base64` 图标转换为 `blob`

## Demo

```ts twoslash
import {imgDataURLtoBlob} from '@vill-v/browser'

imgDataURLtoBlob('data:base64')
```

## DTS

```ts
declare function imgDataURLtoBlob(base64Buf: string): Blob;
```
