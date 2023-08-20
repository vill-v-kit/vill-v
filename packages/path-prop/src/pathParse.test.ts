import { describe, expect, test } from 'vitest'
import { pathParse } from './pathParse'

describe('pathParse', () => {
  test('pathParse',  () => {
    expect(pathParse('data[0]'),).toEqual(['data',0])
    expect(pathParse('data["foo-bar"][0]'),).toEqual(['data','foo-bar',0])
    expect(pathParse('data["foo.bar"][0]'),).toEqual(['data','foo.bar',0])
    expect(()=>pathParse('data[["foo.bar"][0]'),).toThrowError('路径非法')
  })
})
