import { describe, expect, test } from 'vitest'
import { AsyncPool } from './asyncPool'

describe('asyncPool 普通调用', () => {
  const pool = new AsyncPool()
  pool.add(() => Promise.resolve(1))
  pool.add(() => Promise.resolve(2))
  test('长度', () => {
    expect(pool.size).equals(2)
  })
  test('消费', async () => {
    await expect(pool.consume()).resolves.toHaveLength(2)
  })

  test('消费成功后长度', () => {
    expect(pool.size).equals(0)
  })

  test('发生错误的请求', async () => {
    pool.add(() => Promise.reject(1))
    pool.add(() => Promise.reject(1))
    await expect(pool.consume()).rejects.toEqual(1)
  })

  test('清空请求', () => {
    pool.clear()
    expect(pool.size).equals(0)
  })
})

describe('静态调用', () => {
  test('静态调用', async () => {
    await expect(AsyncPool.query([() => Promise.resolve()])).resolves.toHaveLength(1)
  })

  test('静态调用失败', async () => {
    await expect(AsyncPool.query([() => Promise.reject(1)])).rejects.toEqual(1)
  })
})
