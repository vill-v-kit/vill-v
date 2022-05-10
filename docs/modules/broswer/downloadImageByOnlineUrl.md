# downloadImageByOnlineUrl

通过url下载图片

## Demo

```ts
import {downloadImageByOnlineUrl} from '@vill-v/broswer'

downloadImageByOnlineUrl('http://xxxx.xxx.xxx', 'xxx.png')
```

## DTS

```ts
declare function downloadImageByOnlineUrl(url: string, filename: string, mime?: string, bom?: BlobPart): void;
```
