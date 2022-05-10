# hasByPath

通过一个字符串路径获取对象值是否存在

## Demo

```ts
import {hasByPath} from '@vill-v/path-prop'

hasByPath([{test: {foor: 'bar'}}], '[0].test.foor') // => true
hasByPath([{test: {foor: 'bar'}}], [0, 'test', 'foor']) // => true
```

## DTS

```ts
declare const hasByPath: (value: any, path: Path) => boolean;
```
