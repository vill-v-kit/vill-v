# promisefy

尽可能的将一部分数据异步化

## Demo

```ts
import {promisefy} from '@vill-v/async'

await promisefy(0)

await promisefy(Promise.resolve())

await promisefy((resolve)=>resolve(true))

```

## DTS

```ts

declare function promisefy<T>(value: Promise<T>): Promise<T>;
declare function promisefy<T>(value: (...args: any[]) => T): Promise<T>;
declare function promisefy<T>(value: T): Promise<T>;

```
