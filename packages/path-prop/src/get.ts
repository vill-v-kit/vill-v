import { Path } from './interface'
import { pathIterator } from './pathIterator'
import { isNil } from '@vill-v/type-as'

export const getByPath = <T = any>(value: any, path: Path) => {
  return pathIterator<T>(value, path, (has, obj, path) => {
    if (!has) {
      return undefined
    }
    if (isNil(path)) {
      return obj
    }
    return obj[path]
  })
}
