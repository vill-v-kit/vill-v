import { isFunction } from '@vill-v/type-as'

export function promisefy<T>(value: Promise<T>): Promise<T>
export function promisefy<T>(value: (...args: any[]) => T): Promise<T>
export function promisefy<T>(value: T): Promise<T>
export function promisefy(value: any) {
  if (value instanceof Promise) {
    return value
  }
  if (isFunction(value)) {
    return new Promise(value)
  }
  return new Promise((resolve) => resolve(value))
}
