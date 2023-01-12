# pathParse

一个字符串路径解析器

## Demo

```ts
import { pathParse } from '@vill-v/path-prop'

pathParse('test.test1[0].test2')
// ['test','test1',0,'test2']
```

## DTS

```ts
declare const pathParse: (path: Path) => (string | number)[]
```
