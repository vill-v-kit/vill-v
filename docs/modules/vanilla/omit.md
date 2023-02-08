# omt

从 object 中 排除 部分 key

## Demo

```ts
import { omit } from '@vill-v/vanilla'

const source = {
  test: '',
  test1: [] as any[],
  test2: [] as any[],
}
const result = omit(source, ['test', 'test2'])
// =>  { test1: [] }
// source === { test: '', test1: [], test2: [] }
result.test1.push(1)
// source === { test: '', test1: [1], test2: [] }
// result === { test1: [1] }
```

## DTS

```ts
/**
 * 从 object 中 排除 部分key
 * @param obj
 * @param keys
 */
declare const omit: <T extends object, K extends keyof T>(obj: T, keys: K[]) => Omit<T, K>
```
