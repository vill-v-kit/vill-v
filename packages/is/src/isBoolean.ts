import { isTypeOf, isTypeProto } from './typeOf'

export const isBoolean = (value: any): value is boolean => {
  return isTypeOf(value, 'boolean') || isTypeProto(value, '[object Boolean]')
}
