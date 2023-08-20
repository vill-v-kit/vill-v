import { describe, expect, test } from 'vitest'
import { getByPath } from './get'

describe('getByPath', () => {
  test('getByPath',  () => {
    expect(getByPath({data:[1]},'data[0]'),).toBe(1)
    expect(getByPath({data:{'foo-bar':[1]}},'data["foo-bar"][0]'),).toBe(1)
    expect(getByPath({data:{'foo-bar':[1]}},'data[\'foo-bar\'][0]'),).toBe(1)
    expect(getByPath({data:{'foo.bar':[1]}},'data[\'foo.bar\'][0]'),).toBe(1)
    expect(getByPath({data:{'foo-bar':[1]}},'data.foo-bar[0]'),).toBe(1)
    expect(getByPath({data:{'foo-bar':[1]}},['data','foo-bar',0]),).toBe(1)
  })
})
