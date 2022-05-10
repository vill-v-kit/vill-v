# imgDataURLtoBlob

`data:base64` 图标转换为 `blob`

## Demo

```ts
import {imgDataURLtoBlob} from '@vill-v/broswer'

imgDataURLtoBlob('data:base64')
```

## DTS

```ts
declare function imgDataURLtoBlob(base64Buf: string): Blob;
```
