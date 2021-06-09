export { default as initDefaultProps } from './initDefaultProps'
export * from './type'
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
