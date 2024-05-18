# LocalStorageCache

[StorageCache](./StorageCache) 的 localStorage 预设

## Demo

普通使用

```ts twoslash
import { LocalStorageCache, createLocalStorageCache } from '@vill-v/broswer'

const normalStorage = new LocalStorageCache('token')
// or
createLocalStorageCache('token')

// 移除
normalStorage.remove()
// 是否存在
normalStorage.has()
// 获取值
normalStorage.get()
// 设置值
normalStorage.set('foo')
// 获取值
normalStorage.value
// 设置值
normalStorage.value = 'foo'
// 是否和入参相同
normalStorage.eq('bar')
// 与normalStorage.get()相同
normalStorage.rawGet()
// 与normalStorage.set()相同
normalStorage.rawSet()
// 与 normalStorage.value 相同
normalStorage.rawValue
// 与normalStorage.eq('bar')相同
normalStorage.rawEq('bar')
```

对值进行解析

```ts twoslash
import { LocalStorageCache, createLocalStorageCache } from '@vill-v/broswer'

/**
 * 自定义值的解析规则
 */
const storage = new LocalStorageCache('userInfo', {
  get: (value) => JSON.parse(value),
  set: (value) => JSON.stringify(value),
})
/**
 * 第三参数为true时默认使用JSON AP进行解析与序列化
 */
const normalStorage = new LocalStorageCache('userInfo', true)
// or
createLocalStorageCache('userInfo', true)

// 移除
normalStorage.remove()
// 是否存在
normalStorage.has()
// 获取值
normalStorage.get()
// 设置值
normalStorage.set('foo')
// 获取值
normalStorage.value
// 设置值
normalStorage.value = 'foo'
// 是否和入参相同
// 该方法内部使用为 === 只能匹配基础类型
normalStorage.eq('bar')
// 获取字符串原值
normalStorage.rawGet()
// 直接设置字符串值
normalStorage.rawSet()
// 获取字符串原值
normalStorage.rawValue
// 设置字符串原值
normalStorage.rawValue = '{userId:1}'
// 与字符串原值比较是否相同
normalStorage.rawEq('{userId:1}')
```

## DTS

```ts
/**
 * localStorage缓存商店
 */
declare class LocalStorageCache<T = any> extends StorageCache<T> {
  constructor(key: string, parse?: StorageCacheStoreParseType<T> | true)
}

/**
 * localStorage缓存商店
 * @param key
 * @param parse
 */
declare const createLocalStorageCache: <T = any>(
  key: string,
  parse?: true | StorageCacheStoreParseType<T> | undefined
) => LocalStorageCache<T>
```
