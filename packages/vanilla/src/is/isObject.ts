import { typeOf } from './typeOf'

export const isObject = <Obj extends Record<string, any>>(value: any): value is Obj =>
  !!value && typeOf(value) === 'object'
