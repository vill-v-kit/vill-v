# simpleDownloadTextFile

将一个字符串作为文件下载

## Demo

```ts twoslash
import {simpleDownloadTextFile} from '@vill-v/browser'

simpleDownloadTextFile('<div>foor</div>', 'foor.xml')
```

## DTS

```ts
declare function simpleDownloadTextFile(text: string, filename: string): void;
```
