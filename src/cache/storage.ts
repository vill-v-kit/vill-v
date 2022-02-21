import { isNil } from 'lodash-es'
import { forceJsonParse } from '../json'

export type StorageCacheStoreType = typeof localStorage | typeof sessionStorage

export enum StorageCacheStoreEnum {
  Local = 1,
  Session = 1 << 1,
}

const StorageCacheStoreEnumObj = {
  [StorageCacheStoreEnum.Local]: localStorage,
  [StorageCacheStoreEnum.Session]: sessionStorage,
}

export interface StorageCacheStoreParseType<T = any> {
  get: (value: string) => T
  set: (value: T) => string
}

const NormalStorageCacheStoreParse = {
  get: (value) => value,
  set: (value) => value,
}

const JSONStorageCacheStoreParse = {
  get: (value) => forceJsonParse(value, 'null'),
  set: (value) => JSON.stringify(value),
}
/**
 * Storage缓存商店
 */
export class StorageCacheStore<T = any> {
  private readonly storage: StorageCacheStoreType
  private readonly parse: StorageCacheStoreParseType<T>
  private readonly key: string

  constructor(
    storage: StorageCacheStoreEnum,
    key: string,
    parse?: StorageCacheStoreParseType<T> | true
  ) {
    this.storage = StorageCacheStoreEnumObj[storage]
    this.parse = this.changeParse(parse)
    this.key = key
  }

  changeParse(parse?: StorageCacheStoreParseType<T> | true) {
    if (!parse) {
      return NormalStorageCacheStoreParse
    }
    if (parse === true) {
      return JSONStorageCacheStoreParse
    }
    return parse
  }

  get(): T | null {
    const value = this.storage.getItem(this.key)
    if (!value) {
      return null
    }
    return this.parse.get(value)
  }

  set(value?: T | null) {
    if (isNil(value)) {
      return
    }
    const setValue = this.parse.set(value)

    this.storage.setItem(this.key, setValue as any)
  }

  get value(): T | null {
    return this.get()
  }

  set value(value: T | null | undefined) {
    this.set(value)
  }

  remove() {
    this.storage.removeItem(this.key)
  }

  eq(value: any) {
    return this.value === value
  }
}
