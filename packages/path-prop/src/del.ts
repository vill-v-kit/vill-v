import { isNil, isObject } from '@vill-v/type-as'
import { Path } from './interface'
import { pathParse } from './pathParse'

export const delByPath = (value: any, path: Path) => {
  if (!isObject(value) || isNil(path)) {
    return
  }

  const pathArr = pathParse(path)
  pathArr.every((pathItem, index) => {
    if (index === pathArr.length - 1) {
      delete value[pathItem]
      return true
    }
    if (!isObject(value) || !(pathItem in value)) {
      return false
    }

    value = value[pathItem]
    return true
  })
}
