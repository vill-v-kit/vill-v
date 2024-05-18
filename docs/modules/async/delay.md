# delay

延迟一定时间执行后续方法

## Demo

```ts twoslash
import { delay } from '@vill-v/async'

console.log('1')
console.log('等待100ms')
await delay(100)

console.log('2')
```

## DTS

```ts
/**
 * 延迟
 * @param time
 */
declare const delay: (time: number) => Promise<unknown>
```
