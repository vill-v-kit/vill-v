# StorageCache

对浏览器 localStorage 和 sessionStorage 或者 localStorage Like 的统一封装

## Demo

普通使用

```ts twoslash
import { StorageCache, createStorageCache } from '@vill-v/broswer'

const normalStorage = new StorageCache(localStorage, 'token')
// or createStorageCache(localStorage, 'token')
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
import { StorageCache, createStorageCache } from '@vill-v/broswer'

/**
 * 自定义值的解析规则
 */
const storage = new StorageCache(localStorage, 'userInfo', {
  get: (value) => JSON.parse(value),
  set: (value) => JSON.stringify(value),
})
/**
 * 第三参数为true时默认使用JSON AP进行解析与序列化
 */
const normalStorage = new StorageCache(localStorage, 'userInfo', true)
// or createStorageCache(localStorage, 'userInfo', true)

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
 *  值解析规则
 */
interface StorageCacheStoreParseType<T = any> {
  get: (value: string) => T
  set: (value: T) => string
}

/**
 * Storage缓存商店
 * 提供自动json数据处理功能
 */
declare class StorageCache<T = any> {
  /**
   * 初始化
   * @param storage 定义缓存
   * @param key 定义储存的key
   * @param parse 定义解析规则
   */
  constructor(storage: Storage, key: string, parse?: StorageCacheStoreParseType<T> | true)

  private _changeParse

  /**
   * 获取key值
   * 在缓存统一管理，并对key进行混淆之后它很有用
   */
  get key(): string

  /**
   * 是否存在该缓存
   */
  has(): boolean

  /**
   * 获取原始值
   */
  rawGet(): string | null

  /**
   * 设置原始值
   * @param value
   */
  rawSet(value?: string | null): void

  /**
   * 获取值
   */
  get(): T | null

  /**
   * 设置值
   * @param value
   */
  set(value?: T | null): void

  /**
   * 获取值
   */
  get value(): T | null
  /**
   * 设置值
   * @param value
   */
  set value(value: T | null | undefined)

  /**
   * 获取原始值
   */
  get rawValue(): string | null | undefined

  /**
   * 设置原始值
   * @param value
   */
  set rawValue(value: string | null | undefined)

  /**
   * 移除该缓存
   */
  remove(): void

  /**
   * 原值是否相等
   * @param value
   */
  rawEq(value?: string | null): boolean

  /**
   * 值是否相等
   * 暂时只是用===比较
   * @param value
   */
  eq(value?: string | null): boolean
}

declare const createStorageCache: <T = any>(
  storage: Storage,
  key: string,
  parse?: true | StorageCacheStoreParseType<T> | undefined
) => StorageCache<T>
```
