import { isObjTypeProto } from './typeOf'

export const isError = (value: any): value is Error =>
  !!value && isObjTypeProto(value, '[object Error]')
