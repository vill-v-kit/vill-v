import { typeOf } from './typeOf'

export const isObject = (value: any): value is Record<string, any> => {
  return !!value && typeOf(value) === 'object'
}
