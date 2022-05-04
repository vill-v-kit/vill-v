import { Path } from './interface'
import { isNil, isObject } from '@vill-v/type-as'
import { pathParse } from './pathParse'

export const pathIterator = <T = any>(
  value: any,
  path: Path,
  callback: (has: boolean, obj: any, path?: string | number) => T
) => {
  if (!isObject(value)) {
    return callback(false, value)
  }
  if (isNil(path)) {
    return callback(true, value)
  }
  const pathArr = pathParse(path)
  let res = callback(true, value)
  pathArr.every((pathItem) => {
    if (!isObject(value) || !(pathItem in value)) {
      res = callback(false, value)
      return false
    }
    res = callback(true, value, pathItem)
    value = value[pathItem]
    return true
  })
  return res
}
