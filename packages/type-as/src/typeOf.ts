import { isObject } from './isObject'

export const typeOf = (value: any) => {
  return typeof value
}

export const isTypeOf = (value: any, type: string) => {
  return typeOf(value) === type
}

export const objTypeProto = (value: any) => {
  if (Array.isArray(value) || !isObject(value)) {
    return
  }
  return Object.prototype.toString.call(value)
}

export const isObjTypeProto = (value: any, type: string) => {
  return objTypeProto(value) === type
}
