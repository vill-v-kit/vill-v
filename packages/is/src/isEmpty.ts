import { isObject } from './isObject'
import { isMap } from './isMap'
import { isSet } from './isSet'

const isLengthEmpty = (value: any[]) => {
  return value.length === 0
}

const isArrayEmpty = isLengthEmpty

const isObjectEmpty = (value: Record<string, any>) => {
  return Object.keys(value).length === 0
}

const isSizeEmpty = (value: any) => {
  return value.size === 0
}

const isMapEmpty = (value: Map<any, any>) => {
  return isSizeEmpty(value)
}

const isSetEmpty = (value: Set<any>) => {
  return isSizeEmpty(value)
}

/**
 * 是否为空
 * 支持 object,array,Map,Set
 * @param value
 */
export const isEmpty = (value: any) => {
  if (Array.isArray(value)) {
    return isArrayEmpty(value)
  }
  if (isObject(value)) {
    return isObjectEmpty(value)
  }
  if (isMap(value)) {
    return isMapEmpty(value)
  }
  if (isSet(value)) {
    return isSetEmpty(value)
  }
  return true
}
