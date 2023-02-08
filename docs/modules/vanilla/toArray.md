# toArray

将其他数据类型转换为 数组

::: tip 提示

暂时只支持 string map set 的转换

<!-- prettier-ignore -->
:::

## Demo

```ts
import { stringToArray, mapToArray, setToArray, toArray } from '@vill-v/vanilla'

stringToArray('xxxxxx') // => ['x','x','x','x','x','x']
mapToArray(
  new Map([
    [1, 1],
    [1, 1],
  ])
) // => [[1,1],[1,1]]
setToArray(new Set([1, 2, 3, 4])) // => [1, 2, 3, 4]

toArray('xxxxxx') // => ['x','x','x','x','x','x']
toArray(
  new Map([
    [1, 1],
    [1, 1],
  ])
) // => [[1,1],[1,1]]
toArray(new Set([1, 2, 3, 4])) // => [1, 2, 3, 4]
toArray([1, 2, 3, 4]) // => [1, 2, 3, 4]
```

## DTS

```ts
declare const stringToArray: (value: string) => string[]
declare const mapToArray: <Key, Value>(data: Map<Key, Value>) => [Key, Value][]
declare const setToArray: <Value>(data: Set<Value>) => Value[]
declare const toArray: (value: any) => any[]
```
