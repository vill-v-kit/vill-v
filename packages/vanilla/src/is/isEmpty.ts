import { isMap, isNil, isObject, isSet, isString } from '@vill-v/type-as'

const isLengthEmpty = (value: any) => value.length === 0

export const isArrayEmpty = (value: any[]) => isLengthEmpty(value)

export const isStringEmpty = (value: string) => isLengthEmpty(value)

export const isObjectEmpty = (value: Record<string, any>) => Object.keys(value).length === 0

const isSizeEmpty = (value: any) => value.size === 0

export const isMapEmpty = (value: Map<any, any>) => isSizeEmpty(value)

export const isSetEmpty = (value: Set<any>) => isSizeEmpty(value)

/**
 * 是否为空
 * 支持 object,array,Map,Set
 * @param value
 */
export const isEmpty = (value: any) => {
  if (isNil(value)) {
    return true
  }
  if (isString(value)) {
    return isStringEmpty(value)
  }
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
