import { isTypeProto } from './typeOf'

export const isMap = (value: any): value is Map<any, any> => {
  return !!value && isTypeProto(value, '[object Map]')
}
