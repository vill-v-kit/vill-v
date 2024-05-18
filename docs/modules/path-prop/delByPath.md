# delByPath

通过一个字符串路径删除对象值

## Demo

```ts twoslash
import {delByPath} from '@vill-v/path-prop'

delByPath([{test: {foor: 'bar'}}], '[0].test.foor') // => [{test: {}}]
delByPath([{test: {foor: 'bar'}}], [0, 'test', 'foor']) // => [{test: {}}]
```

## DTS

```ts
declare const delByPath: (value: any, path: Path) => void;
```
