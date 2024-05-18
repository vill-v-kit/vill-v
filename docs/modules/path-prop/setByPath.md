# setByPath

通过一个字符串路径设置对象值

## Demo

```ts twoslash
import {setByPath} from '@vill-v/path-prop'

setByPath([{test: {foor: 'bar'}}], '[0].test.foor', 'value') // => [{test: {foor: 'value'}}]
setByPath([{test: {foor: 'bar'}}], [0, 'test', 'foor'], 'value') // => [{test: {foor: 'value'}}]
```

## DTS

```ts
declare const setByPath: (value: any, path: Path, setValue: any) => void;
```
