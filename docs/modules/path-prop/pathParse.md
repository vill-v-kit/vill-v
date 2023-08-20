# pathParse

一个字符串路径解析器

## Demo

```ts
import { pathParse } from '@vill-v/path-prop'

pathParse('test.test1[0].test2')
// ['test','test1',0,'test2']

pathParse('test.test1["foo.bar"].test2')
// ['test','test1','foo.bar','test2']
```

## DTS

```ts
/**
 * 解析路径
 *
 * @example
 * pathParse('data[0].test[\'foo.bar\']')
 * // type ['data',0,'test','foo.bar']
 * // result ['data',0,'test','foo.bar']
 *
 * pathParse(['data',0,'test','foo.bar'] as const)
 * // type ['data',0,'test','foo.bar']
 * // result ['data',0,'test','foo.bar']
 *
 * pathParse(['data',0,'test','foo.bar'])
 * // type (string|number)[]
 * // result ['data',0,'test','foo.bar']
 * @param path
 */
declare function pathParse<T extends Path>(path: T): ToPath<T>;
```
