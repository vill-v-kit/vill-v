# safeAwaitFn

作用同[safeAwait](/modules/async/safeAwait)

作为一个高阶函数使用

## Demo

```ts
const test= safeAwaitFn(async ()=>{
  await Promise.reject()
})
```

## DTS

```ts

declare function safeAwaitFn(fn: (...args: any[]) => Promise<any>): (...args: any[]) => void;

```
