import { StorageCache, StorageCacheStoreParseType } from './storage'

/**
 * sessionStorage缓存商店
 */
export class SessionStorageCache<T = any> extends StorageCache<T> {
  constructor(key: string, parse?: StorageCacheStoreParseType<T> | true) {
    super(window.sessionStorage, key, parse)
  }
}

export const createSessionStorageCache = <T = any>(
  key: string,
  parse?: StorageCacheStoreParseType<T> | true
) => new SessionStorageCache(key, parse)
