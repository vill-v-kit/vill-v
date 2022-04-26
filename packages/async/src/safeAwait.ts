import { isFunction } from '@vill-v/vanilla'

async function safeAwaitSingle(fn: Promise<any>) {
  try {
    await fn
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

async function safeAwaitAny(fn: () => Promise<any>) {
  return safeAwaitSingle(fn())
}

/**
 * 安全的await
 * 用于阻止await报错，影响后续流程
 * @param arg
 */
export function safeAwait(arg: Promise<any>): Promise<any>
export function safeAwait(arg: () => Promise<any>): Promise<any>
export function safeAwait(arg: any) {
  if (arg instanceof Promise) {
    return safeAwaitSingle(arg)
  }
  if (isFunction(arg)) {
    return safeAwaitAny(arg)
  }
  throw new Error('请传入一个Promise或者一个返回Promise的方法')
}

/**
 * 安全的await
 * 用于阻止await报错，影响后续流程
 * ```ts
 *
 * const getList = safeAwaitFn(async ()=>{
 *   await Promise.reject()
 *   await Promise.resolve()
 * })
 * ```
 * @param fn
 */
export function safeAwaitFn(fn: (...args: any[]) => Promise<any>) {
  return (...args: any[]) => {
    safeAwaitSingle(fn(...args))
  }
}
