import { isNil } from 'lodash-es'

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
/**
 * Storage缓存商店
 */
export class StorageCacheStore<T = any> {
  private readonly storage: StorageCacheStoreType
  private readonly parse: StorageCacheStoreParseType<T>
  private readonly key: string

  constructor(storage: StorageCacheStoreEnum, key: string, parse?: StorageCacheStoreParseType<T>) {
    this.storage = StorageCacheStoreEnumObj[storage]
    this.parse = parse || NormalStorageCacheStoreParse
    this.key = key
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
