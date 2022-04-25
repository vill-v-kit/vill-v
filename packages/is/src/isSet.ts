import { isTypeProto } from './typeOf'

export const isSet = (value: any): value is Set<any> => {
  return !!value && isTypeProto(value, '[object Set]')
}
