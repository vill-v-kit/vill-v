# getByPath

通过一个字符串路径获取对象值

## Demo

```ts
import {getByPath} from '@vill-v/path-prop'

getByPath([{test: {foo: 'bar'}}], '[0].test.foo') // => bar
getByPath([{test: {foo: 'bar'}}], [0, 'test', 'foo'] as const) // => bar
getByPath([{test: {'foo.bar': 'bar'}}],  '[0].test["foo.bar"]') // => bar
getByPath([{test: {'foo.bar': 'bar'}}],  [0, 'test', 'foo.bar'] as const) // => bar

/// ***放弃类型推导直接指定返回类型***
getByPath<string>([{test: {foo: 'bar'}}], '[0].test.foo')
```

## DTS

```ts
/**
 * 通过路径获取值
 * @example
 * ```ts
 * getByPath({data:[0]},'data[0]')
 * // type 0
 * // result 0
 * getByPath({data:[0]},['data',0] as const)
 * // type 0
 * // result 0
 * getByPath({data:[0]},['data',0])
 * // type never
 * // result 0
 * ```
 * @param value
 * @param path
 */
declare function getByPath<Data, Keys extends Path>(value: Data, path: Keys): Get<Data, Keys>;
declare function getByPath<Data>(value: any, path: Path): Data;
```
