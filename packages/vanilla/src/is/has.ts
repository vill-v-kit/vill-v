import { isObject } from './isObject'

/**
 * 对象是否有这个key
 * @param object
 * @param key
 */
export const has = (object: Record<string, any>, key: string) =>
  isObject(object) && Reflect.has(object, key)
