import { Path } from './interface'
import { pathIterator } from './pathIterator'

export const hasByPath = (value: any, path: Path) => {
  return pathIterator<boolean>(value, path, (has) => {
    return has
  })
}
