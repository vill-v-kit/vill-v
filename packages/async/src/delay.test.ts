import { describe, expect, test } from 'vitest'
import { delay } from './delay'

describe('delay 延迟调用', () => {
  test('延迟 200ms调用', async () => {
    const time = Date.now()
    await delay(200)
    expect(Date.now() - time).toBeGreaterThanOrEqual(200)
  })
})
