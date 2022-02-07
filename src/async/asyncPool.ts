/**
 * 异步并发控制器（池）
 */
export class AsyncPool<T = any> {
  private readonly max: number
  private pool: (() => Promise<T>)[] = []

  constructor(max = 6) {
    this.max = max
  }

  /**
   * 新增异步方法
   * @param asyncFn
   */
  public add(asyncFn: () => Promise<T>) {
    this.pool.push(asyncFn)
  }

  /**
   * 清除
   */
  public clear() {
    this.pool = []
  }

  /**
   * 获取请求池的长度
   */
  public get size() {
    return this.pool.length
  }

  /**
   * 是否不为空
   */
  public isNotEmpty() {
    return !!this.size
  }

  /**
   * 是否为空
   */
  public isEmpty() {
    return !this.isNotEmpty
  }

  /**
   * 消费
   */
  public async consume() {
    const ret: any[] = []
    const executing: (() => Promise<T>)[] = []
    for (const item of this.pool) {
      const p = Promise.resolve().then(() => item())
      ret.push(p)
      if (this.max <= this.pool.length) {
        const e = p.then(() => executing.splice(executing.indexOf(e), 1))
        executing.push(e)
        if (executing.length >= this.max) {
          await Promise.race(executing)
        }
      }
    }
    this.clear()
    return Promise.all(ret)
  }

  /**
   * 设置异步池
   * @param tasks
   * @private
   */
  private setPool(tasks: (() => Promise<T>)[]) {
    this.pool = tasks
  }

  /**
   * 静态直接调用异步池
   * @param tasks
   * @param max
   */
  public static query<T = any>(tasks: (() => Promise<T>)[], max?: number) {
    const schedule = new AsyncPool(max)
    schedule.setPool(tasks)
    return schedule.consume()
  }
}
