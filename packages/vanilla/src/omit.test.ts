import { describe, expect, test } from 'vitest'
import { omit } from './omit'

describe('omit', () => {
  test('omit', () => {
    const source = {
      test: '',
      test1: [] as any[],
      test2: [] as any[],
    }
    const result = omit(source, ['test', 'test2'])
    expect(result).toEqual({ test1: [] })
    expect(source).toEqual({ test: '', test1: [], test2: [] })
    result.test1.push(1)
    expect(source).toEqual({ test: '', test1: [1], test2: [] })
    expect(result).toEqual({ test1: [1] })
  })
})
