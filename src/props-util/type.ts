import { App, PropType, VNodeChild, Plugin } from 'vue'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args

export const tupleNum = <T extends number[]>(...args: T) => args

/**
 * https://stackoverflow.com/a/59187769
 * Extract the type of an element of an array/tuple without performing indexing
 */
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never

/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type LiteralUnion<T extends U, U> = T | (U & {})

export type Data = Record<string, unknown>

export type Key = string | number

type DefaultFactory<T> = (props: Data) => T | null | undefined

export interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null
  required?: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  default?: D | DefaultFactory<D> | null | undefined | object

  validator?(value: unknown): boolean
}

export type VueNode = VNodeChild | JSX.Element

export const withInstall = <T, K>(comp: T, ...compList: K[]) => {
  const c = comp as any
  const cList = compList as any[]
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp)
    cList.forEach((item) => {
      app.component(item.displayName || item.name, item)
    })
  }

  return comp as T & Plugin
}
