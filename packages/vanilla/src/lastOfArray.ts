export function lastOfArray<T = any>(array: T[], fail: T): T
export function lastOfArray<T = any>(array: T[], fail: null): T | null
export function lastOfArray<T = any>(array: T[], fail?: undefined): T | undefined

/**
 * 获取数组最后下标
 * @param array
 * @param fail
 */
export function lastOfArray<T = any>(array: T[], fail?: T | undefined | null) {
  return array.length ? array[array.length - 1] : fail
}
