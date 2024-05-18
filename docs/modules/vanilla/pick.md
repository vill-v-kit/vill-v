# pick

从 object 中 选取 部分 key

## Demo

```ts twoslash
import {pick} from '@vill-v/vanilla'

const source = {
  test: '',
  test1: [] as any[],
  test2: [] as any[],
}
const result = pick(source, ['test1', 'test2'])
// => { test1: [], test2: [] }
// source === { test: '', test1: [], test2: [] }
result.test2.push(1)
// source === { test: '', test1: [], test2: [1] }
// result === { test1: [], test2: [1] }
```

## DTS

```ts
/**
 * 从 object 中 选取 部分key
 * @param obj
 * @param keys
 */
declare const pick: <T extends object, K extends keyof T>(obj: T, keys: K[]) => Pick<T, K>
```
