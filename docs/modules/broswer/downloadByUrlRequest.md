# downloadByUrlRequest

通过网络请求下载文件

## Demo

```ts
import {downloadByUrlRequest} from '@vill-v/broswer'

downloadByUrlRequest({
  url: 'https://xxx.xxx.xxx',
  target: '_blank',
  fileName: 'xxx.pdf',
})
```

## DTS

```ts
declare function downloadByUrlRequest({url, target, fileName,}: {
  url: string;
  target?: LinkTargetContext;
  fileName?: string;
}): void;
```
