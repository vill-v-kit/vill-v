# downloadByUrl

通过`<a>` 标签下载文件

## Demo

```ts twoslash
import {downloadByUrl} from '@vill-v/browser'

downloadByUrl({
  url: 'https://xxx.xxx.xxx',
  target: '_blank',
  fileName: 'xxx.pdf',
})
```

## DTS

```ts twoslash
import {LinkTargetContext} from '@vill-v/ts'

declare function downloadByUrl({url, target, fileName,}: {
  url: string;
  target?: LinkTargetContext;
  fileName?: string;
}): boolean;
```
