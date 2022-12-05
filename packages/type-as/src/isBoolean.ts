import { isObjTypeProto, isTypeOf } from './typeOf'

export const isBoolean = (value: any): value is boolean =>
  isTypeOf(value, 'boolean') || isObjTypeProto(value, '[object Boolean]')
