import { isNil } from '@vill-v/type-as'
import { Path } from './interface'
import { pathIterator } from './pathIterator'

export const getByPath = <T = any>(value: any, path: Path) => {
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
