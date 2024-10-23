import { isNil } from '@vill-v/type-as'
import { Path } from './interface'
import { pathParse } from './pathParse'

const unsafePath = new Set(['__proto__', 'prototype', 'constructor'])
export const pathIterator = <T = any>(
  value: any,
  path: Path,
  callback: (has: boolean, obj: any, path?: string | number) => T
) => {
  if (typeof value !== 'object') {
    return callback(false, value)
  }
  if (isNil(path)) {
    return callback(true, value)
  }
  const pathArr = pathParse(path)
  if (pathArr.findIndex((item) => unsafePath.has(`${item}`)) !== -1) {
    return undefined as any as T
  }
  let res = callback(true, value)
  pathArr.every((pathItem) => {
    if (typeof value !== 'object' || !(pathItem in value)) {
      res = callback(false, value)
      return false
    }
    res = callback(true, value, pathItem)
    value = value[pathItem]
    return true
  })
  return res
}
