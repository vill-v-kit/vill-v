/**
 * 异步并发控制器（池）
 */
export class AsyncPool<T = any> {
  private max: number
  private pool: (() => Promise<T>)[] = []
  private result: T[] = []

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
    this.result = []
  }

  /**
   * 消费
   */
  public consume() {
    this.result = []
    return Promise.all(
      Array.from({ length: this.max }).map(
        () =>
          new Promise<void>((resolve, reject) => {
            const runTask = () => {
              if (this.pool.length <= 0) {
                resolve()
                return
              }
              const task = this.pool.shift()
              if (!task) {
                resolve()
                return
              }
              task()
                .then((res) => {
                  this.result.push(res)
                  runTask()
                })
                .catch(reject)
            }
            runTask()
          })
      )
    )
      .then(() => this.result)
      .catch((e) => {
        this.clear()
        return e
      })
  }

  /**
   * 获取结果列表
   */
  public get resultList() {
    return this.result
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
