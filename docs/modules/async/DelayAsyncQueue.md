# DelayAsyncQueue

收集异步请求，不立刻执行，在需要消费它时在执行

## Demo

```ts
import { DelayAsyncQueue } from '@vill-v/async'

// 初始化
const pool = new DelayAsyncQueue()

// 新增一份请求
pool.add(()=>Promise.resolve())

// 清空整个请求池
pool.clear()

// 请求池内部请求数量
pool.size

// 请求池内部请求是否不为空
pool.isNotEmpty()

// 请求池内部请求是否为空
pool.isEmpty()

// 消费所有请求
pool.consume().then(([...res])=>{
  
})
```

## DTS

```ts
/**
 * 延迟执行的异步请求队列
 */
declare class DelayAsyncQueue {
    /**
     * 新增
     * @param asyncFn
     */
    add(asyncFn: (...args: any[]) => Promise<any>): void;
    /**
     * 设置队列
     * @param data
     */
    setQueue(data: ((...args: any[]) => Promise<any>)[]): void;
    /**
     * 清除
     */
    clear(): void;
    /**
     * 获取请求队列的长度
     */
    get size(): number;
    /**
     * 是否不为空
     */
    isNotEmpty(): boolean;
    /**
     * 是否为空
     */
    isEmpty(): boolean;
    /**
     * 消费
     */
    consume(): Promise<void>;
}
```
