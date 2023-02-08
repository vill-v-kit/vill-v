import { describe, expect, test } from 'vitest'
import { lastOfArray } from './lastOfArray'

describe('lastOfArray', () => {
  test('lastOfArray', () => {
    expect(lastOfArray([])).toBeUndefined()
    expect(lastOfArray([1])).toEqual(1)
    expect(lastOfArray([1, 2])).toEqual(2)
    expect(lastOfArray([], '1')).toEqual('1')
    expect(lastOfArray([], null)).toEqual(null)
  })
})
