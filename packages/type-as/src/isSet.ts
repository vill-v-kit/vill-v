import { isObjTypeProto } from './typeOf'

export const isSet = (value: any): value is Set<any> =>
  !!value && isObjTypeProto(value, '[object Set]')
