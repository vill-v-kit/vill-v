import { describe, expect, test } from 'vitest'
import { pick } from './pick'

describe('pick', () => {
  test('pick', () => {
    const source = {
      test: '',
      test1: [] as any[],
      test2: [] as any[],
    }
    const result = pick(source, ['test1', 'test2'])
    expect(result).toEqual({ test1: [], test2: [] })
    expect(source).toEqual({ test: '', test1: [], test2: [] })
    result.test2.push(1)
    expect(source).toEqual({ test: '', test1: [], test2: [1] })
    expect(result).toEqual({ test1: [], test2: [1] })
  })
})
