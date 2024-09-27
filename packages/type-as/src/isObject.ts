export const isObject = <Obj extends Record<string, any>>(value: any): value is Obj =>
  !!value && value.constructor === Object
