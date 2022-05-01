import { isTypeOf, isObjTypeProto } from './typeOf'

export const isNumber = (value: any): value is number =>
  isTypeOf(value, 'number') || isObjTypeProto(value, '[object Number]')
