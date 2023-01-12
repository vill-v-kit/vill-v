import { describe, expect, test } from 'vitest'
import { date, isBirthday, toDayJs } from '.'
describe('时间工具', () => {
  test('按需连续加载插件', () => {
    const time = date()
    expect(toDayJs(time).isSame(time)).toBeTruthy()
    expect(isBirthday('1999-06-01')).toBeTruthy()
  })
})
