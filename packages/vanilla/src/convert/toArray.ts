import { isMap, isSet, isString } from '@vill-v/type-as'

export const stringToArray = (value: string) => {
  return [...value]
}

export const mapToArray = <Key, Value>(data: Map<Key, Value>) => {
  let index = -1
  const list: Array<[Key, Value]> = new Array<[Key, Value]>(data.size)
  data.forEach((value, key) => {
    list[++index] = [key, value]
  })
  return list
}

export const setToArray = <Value>(data: Set<Value>) => {
  return [...data]
}

/**
 * 转为array
 * 支持 string map set
 * @param value
 */
export const toArray = (value: any): any[] => {
  if (!value) {
    return []
  }
  if (Array.isArray(value)) {
    return value
  }
  if (isString(value)) {
    return stringToArray(value)
  }
  if (isMap(value)) {
    return mapToArray(value)
  }
  if (isSet(value)) {
    return setToArray(value)
  }
  return []
}

/**
 * 将任何入参都包装成数组
 * @param value
 */
export const asArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value)) {
    return value
  }
  return [value]
}
