import { describe, expect, test } from 'vitest'
import { asArray } from './toArray'

describe('toArray', () => {
  test('asArray', () => {
    expect(asArray('')).toEqual([''])
    expect(asArray(['test'])).toEqual(['test'])
  })
})
