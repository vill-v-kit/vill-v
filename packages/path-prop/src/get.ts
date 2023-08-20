import { isNil } from '@vill-v/type-as'
import { Get, Path } from './interface'
import { pathIterator } from './pathIterator'

/**
 * 通过路径获取值
 * @example
 * ```ts
 * getByPath({data:[0]},'data[0]')
 * // type 0
 * // result 0
 * getByPath({data:[0]},['data',0] as const)
 * // type 0
 * // result 0
 * getByPath({data:[0]},['data',0])
 * // type never
 * // result 0
 * ```
 * @param value
 * @param path
 */
export function getByPath<Data, Keys extends Path>(value: Data, path: Keys): Get<Data, Keys>
export function getByPath<Data>(value: any, path: Path): Data
export function getByPath<T = any>(value: any, path: Path) {
  return pathIterator<T>(value, path, (has, obj, path) => {
    if (!has) {
      return
    }
    if (isNil(path)) {
      return obj
    }
    return obj[path]
  })
}
