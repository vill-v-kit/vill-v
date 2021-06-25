import { isArray, isNil, isString } from 'lodash-es'
import { isAllItemVerified } from './extra'
export type Nullable<T> = T | null

export interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

export interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

export type RefType<T> = T | null

export type LabelValueOptions = {
  label: string
  value: any
}[]

export type EmitType = (event: string, ...args: any[]) => void

export type TargetContext = '_self' | '_blank'

export interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
}

export type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null

export type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
/**
 * 这个api是否可以使用
 * @param api
 */
export function canIUse(api: keyof typeof window | (keyof typeof window)[]) {
  if (isNil(api)) {
    return false
  }
  if (isString(api) && window[api]) {
    return true
  }
  if (isArray(api)) {
    return isAllItemVerified(api, (item) => isString(item) && window[item])
  }
  return false
}
