export type Path = string | readonly (string | number)[]

/**
 * TransPathSquareBracketsToDot<'data[0][1]'>
 * //=> data.[0].[1]
 */
type TransPathSquareBracketsToDot<T extends string> = T extends `[${infer Head}]${infer Tail}`
  ? Tail extends `[${string}`
    ? `[${Head}].${TransPathSquareBracketsToDot<Tail>}`
    : `[${Head}]${TransPathSquareBracketsToDot<Tail>}`
  : T extends `${infer Head}[${infer Middle}]${infer Tail}`
  ? `${Head}.${TransPathSquareBracketsToDot<`[${Middle}]${Tail}`>}`
  : T

/**
 * FixSquareBracket<'[1]'>
 * //=> 1
 * FixSquareBracket<'["1"]'>
 * //=> '1'
 * FixSquareBracket<'[\'1\']'>
 * //=> '1'
 * FixSquareBracket<'[`1`]'>
 * //=> '1'
 */
type FixSquareBracket<T extends unknown> = T extends `[${infer Head extends number}]`
  ? Head
  : T extends `["${infer Head extends string}"]`
  ? Head
  : T extends `['${infer Head extends string}']`
  ? Head
  : T extends `[\`${infer Head extends string}\`]`
  ? Head
  : T

/**
 * SplitPath<'x.y.z'>
 * // => ['x','y','z']
 * SplitPath<'[x].y.z'>
 * // => ['[x]','y','z']
 * SplitPath<'[x.x].y.z'>
 * // => ['[x.x]','y','z']
 * SplitPath<'["x.x"].y.z'>
 * // => ['["x.x"]','y','z']
 */
type SplitPath<T extends string> = T extends `[${infer Head}].${infer Tail}`
  ? [`[${Head}]`, ...SplitPath<Tail>]
  : T extends `${infer Head}.${infer Tail}`
  ? [Head, ...SplitPath<Tail>]
  : T extends '.'
  ? []
  : [T]

/**
 * FixPath<['test','[0]','[\'foo.bar\']']>
 * // => ['test',0,'foo.bar']
 */
type FixPath<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? [FixSquareBracket<Head>, ...FixPath<Tail>]
  : T

/**
 * ToPath<'x.y[0].z'>
 * // => ['x','y',0,'z']
 * ToPath<['x','y',0,'z']>
 * // => ['x','y',0,'z']
 */
export type ToPath<T extends Path> = T extends string
  ? FixPath<SplitPath<TransPathSquareBracketsToDot<T>>>
  : T

type GetPropOf<Data, Key extends string | number> = Data extends null | undefined
  ? undefined
  : Key extends keyof Data
  ? Data[Key]
  : never

type GetWithPath<Data, Keys extends readonly (string | number)[]> = Keys extends []
  ? Data
  : Keys extends readonly [infer Head, ...infer Tail]
  ? GetWithPath<GetPropOf<Data, Extract<Head, string | number>>, Extract<Tail, (string | number)[]>>
  : never

/**
 *Get<{data:[0]},'data[0]'>
 * // type 0
 * // result 0
 * Get<{data:[0]},['data',0]>
 * // type 0
 * // result 0
 */
export type Get<Data, Keys extends Path> = GetWithPath<Data, ToPath<Keys>>
