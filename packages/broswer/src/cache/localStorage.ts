import { StorageCache, StorageCacheStoreParseType } from './storage'

/**
 * localStorage缓存商店
 */
export class LocalStorageCache<T = any> extends StorageCache<T> {
  constructor(key: string, parse?: StorageCacheStoreParseType<T> | true) {
    super(window.localStorage, key, parse)
  }
}

export const createLocalStorageCache = <T = any>(
  key: string,
  parse?: StorageCacheStoreParseType<T> | true
) => new LocalStorageCache(key, parse)
