import { isTypeOf, isObjTypeProto } from './typeOf'

export const isString = (value): value is string =>
  isTypeOf(value, 'string') || isObjTypeProto(value, '[object String]')
