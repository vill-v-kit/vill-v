# lastOfArray

获取数组最后下标

## Demo

```ts
import { lastOfArray } from '@vill-v/vanilla'

lastOfArray([]) // undefined
lastOfArray([1]) // 1
lastOfArray([1, 2]) // 2
lastOfArray([], '1') // '1'
lastOfArray([], null) // null
```

## DTS

```ts
declare function lastOfArray<T = any>(array: T[], fail: T): T
declare function lastOfArray<T = any>(array: T[], fail: null): T | null
declare function lastOfArray<T = any>(array: T[], fail?: undefined): T | undefined
```
