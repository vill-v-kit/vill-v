import { forceJsonParse } from '../json'
import { isNil, isString } from 'lodash-es'

export type CacheStoreType = typeof localStorage | typeof sessionStorage

export enum CacheStoreEnum {
  Local = 1,
  Session = 1 << 1,
}

const CacheStoreEnumObj = {
  [CacheStoreEnum.Local]: localStorage,
  [CacheStoreEnum.Session]: sessionStorage,
}

/**
 * Storage缓存商店
 */
export class StorageCacheStore<T = any> {
  private readonly storage: CacheStoreType
  private readonly json: boolean
  private readonly key: string

  constructor(storage: CacheStoreEnum, key: string, json?: boolean) {
    this.storage = CacheStoreEnumObj[storage]
    this.json = json || false
    this.key = key
  }

  get(): T | null {
    const value = this.storage.getItem(this.key)
    if (!value) {
      return null
    }
    if (this.json) {
      return forceJsonParse<T>(value, 'null') as any as T
    }
    return value as any as T
  }

  set(value?: T | null) {
    if (isNil(value)) {
      return
    }
    if (this.json) {
      this.storage.setItem(this.key, isString(value) ? value : (JSON.stringify(value) as any))
      return
    }
    this.storage.setItem(this.key, value as any)
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
