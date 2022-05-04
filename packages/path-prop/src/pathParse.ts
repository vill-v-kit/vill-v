import { isString } from '@vill-v/type-as'
import { Path } from './interface'

enum PathDelimiter {
  START,
  PROP,
  INDEX_START,
  INDEX_END,
}

const correctIndexPath = new Set('0123456789')
export const pathParse = (path: Path) => {
  if (Array.isArray(path)) {
    return path
  }
  if (!isString(path)) {
    throw new Error('路径非法')
  }
  if (!path) {
    return []
  }
  const pathArray: (string | number)[] = []
  let currentPath = ''
  let currentPathDelimiter = PathDelimiter.START as PathDelimiter
  for (const pathElement of path) {
    switch (pathElement) {
      case '.': {
        if (currentPathDelimiter === PathDelimiter.INDEX_START) {
          throw new Error('路径非法')
        }
        if ([PathDelimiter.INDEX_END, PathDelimiter.START].includes(currentPathDelimiter)) {
          currentPathDelimiter = PathDelimiter.PROP
          break
        }
        pathArray.push(currentPath)
        currentPath = ''
        currentPathDelimiter = PathDelimiter.PROP
        break
      }
      case '[': {
        if (currentPathDelimiter === PathDelimiter.INDEX_START) {
          throw new Error('路径非法')
        }
        if ([PathDelimiter.INDEX_END, PathDelimiter.START].includes(currentPathDelimiter)) {
          currentPathDelimiter = PathDelimiter.INDEX_START
          break
        }
        pathArray.push(currentPath)
        currentPath = ''
        currentPathDelimiter = PathDelimiter.INDEX_START
        break
      }
      case ']': {
        if (currentPathDelimiter !== PathDelimiter.INDEX_START) {
          throw new Error('路径非法')
        }
        pathArray.push(+currentPath)
        currentPath = ''
        currentPathDelimiter = PathDelimiter.INDEX_END
        break
      }
      default: {
        if (
          currentPathDelimiter === PathDelimiter.INDEX_START &&
          !correctIndexPath.has(pathElement)
        ) {
          throw new Error('路径非法')
        }
        if (currentPathDelimiter === PathDelimiter.INDEX_END) {
          throw new Error('下标信息有误,请勿使用类似的下标路径 `[0]]` ')
        }
        if (currentPathDelimiter === PathDelimiter.START) {
          currentPathDelimiter = PathDelimiter.PROP
        }
        currentPath += pathElement
      }
    }
  }
  switch (currentPathDelimiter) {
    case PathDelimiter.PROP:
      pathArray.push(currentPath)
      break
    case PathDelimiter.INDEX_START:
      throw new Error('路径非法')
  }
  return pathArray
}
