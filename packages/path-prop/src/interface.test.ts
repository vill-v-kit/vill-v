import { describe, expectTypeOf, test } from 'vitest'
import { Get } from './interface'

describe('Get 类型测试', () => {
  test('Get 类型测试', async () => {
    expectTypeOf<Get<{ data: [1] }, 'data[0]'>>().toMatchTypeOf<1>()
    expectTypeOf<Get<{ data: [1, [1, 0]] }, 'data[1][0]'>>().toMatchTypeOf<1>()
    expectTypeOf<Get<{ data: {'foo-bar':[1]} }, 'data[\'foo-bar\'][0]'>>().toMatchTypeOf<1>()
    expectTypeOf<Get<{ data: {'foo.bar':[1]} }, 'data[\'foo.bar\'][0]'>>().toMatchTypeOf<1>()
  })
})
