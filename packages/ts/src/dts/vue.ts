import { Nullable } from './vanilla'

export type VueEmitType = (event: string, ...args: any[]) => void

export interface VueComponentEl<T extends HTMLElement = HTMLDivElement> {
  $el: T
}

export type VueComponentElRef<T extends HTMLElement = HTMLDivElement> = Nullable<VueComponentEl<T>>

export type VueElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
