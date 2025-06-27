# downloadByData

通过`blob` 下载文件

## Demo

```ts twoslash
// @noErrors
import { downloadByData } from '@vill-v/browser'

downloadByData({
  data: new File(),
  target: '_blank',
  filename: 'xxx.pdf',
})
```

### DTS

```ts twoslash
import {LinkTargetContext} from '@vill-v/ts'

declare function downloadByData({data, target, filename, mime, bom,}: {
  data: BlobPart;
  target?: LinkTargetContext;
  filename: string;
  mime?: string;
  bom?: BlobPart;
}): void;
```
