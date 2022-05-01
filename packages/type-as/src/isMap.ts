import { isObjTypeProto } from './typeOf'

export const isMap = <Key = any, Value = any>(value: any): value is Map<Key, Value> =>
  !!value && isObjTypeProto(value, '[object Map]')
