import { isTypeOf, isTypeProto } from './typeOf'

export const isString = (value): value is string => {
  return isTypeOf(value, 'string') || isTypeProto(value, '[object String]')
}
