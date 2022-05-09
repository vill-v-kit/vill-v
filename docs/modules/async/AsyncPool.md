# asyncPool

异步并发数量控制器

为了解决一次性发送过多并发请求，将浏览器卡死的问题
<br/>将所有请求切片并发

## Demo

```ts
import { AsyncPool } from '@vill-v/async'

// 初始化
const pool = new AsyncPool(6)

// 新增一份请求
pool.add(()=>Promise.resolve())

// 清空整个并发池
pool.clear()

// 并发池内部请求数量
pool.size

// 并发池内部请求是否不为空
pool.isNotEmpty()

// 并发池内部请求是否为空
pool.isEmpty()

// 消费所有请求
pool.consume().then(([...res])=>{
  
})
```

## DTS

```ts
/**
 * 异步并发控制器（池）
 */
declare class AsyncPool<T = any> {
  /**
   * 设置一次性请求最大数量，默认6
   * @param max
   */
    constructor(max?: number);
    /**
     * 新增异步方法
     * @param asyncFn
     */
    add(asyncFn: () => Promise<T>): void;
    /**
     * 清除
     */
    clear(): void;
    /**
     * 获取请求池的长度
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
    consume(): Promise<any[]>;
    /**
     * 设置异步池
     * @param tasks
     * @private
     */
    private setPool;
    /**
     * 静态直接调用异步池
     * @param tasks
     * @param max
     */
    static query<T = any>(tasks: (() => Promise<T>)[], max?: number): Promise<any[]>;
}
```
