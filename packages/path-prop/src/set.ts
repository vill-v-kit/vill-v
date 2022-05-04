import { Path } from './interface'
import { isNil, isNumber, isObject } from '@vill-v/type-as'
import { pathParse } from './pathParse'

export const setByPath = (value: any, path: Path, setValue: any) => {
  if (!isObject(value) || isNil(path)) {
    return
  }

  const pathArr = pathParse(path)
  pathArr.forEach((pathItem, index) => {
    if (index === pathArr.length - 1) {
      value[pathItem] = setValue
    } else if (!isObject(value[pathItem])) {
      value[pathItem] = isNumber(pathArr[index + 1]) ? [] : {}
    }
    value = value[pathItem]
  })
}
