import { isTypeOf, isTypeProto } from './typeOf'

export const isNumber = (value: any): value is number => {
  return isTypeOf(value, 'number') || isTypeProto(value, '[object Number]')
}
