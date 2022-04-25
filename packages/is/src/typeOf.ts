import { isObject } from './isObject'

export const typeOf = (value: any) => {
  return typeof value
}

export const isTypeOf = (value: any, type: string) => {
  return typeOf(value) === type
}

export const typeProto = (value: any) => {
  if (Array.isArray(value) || !isObject(value)) {
    return
  }
  return Object.prototype.toString.call(value)
}

export const isTypeProto = (value: any, type: string) => {
  return typeProto(value) === type
}
