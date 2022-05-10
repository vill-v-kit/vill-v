# getByPath

通过一个字符串路径获取对象值

## Demo

```ts
import {getByPath} from '@vill-v/path-prop'

getByPath([{test: {foor: 'bar'}}], '[0].test.foor') // => bar
getByPath([{test: {foor: 'bar'}}], [0, 'test', 'foor']) // => bar
```

## DTS

```ts
declare const getByPath: <T = any>(value: any, path: Path) => T;
```
