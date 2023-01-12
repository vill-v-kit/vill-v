import { thisYear } from './date'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

/**
 * 验证是否为生日
 * 1900 年起
 * 只支持以下几种格式：
 * - YYYYMMDD
 * - YYYY-MM-DD
 * - YYYY/MM/DD
 * - YYYY.MM.DD
 * - YYYY年MM月DD日
 * 占位符含义详见 [dayjs](https://dayjs.gitee.io/docs/zh-CN/parse/string-format)
 *
 * @param value 值
 * @return 是否为生日
 */
export const isBirthday = (value: string): boolean => {
  dayjs.extend(customParseFormat)
  const dayJs = dayjs(value, [
    'YYYY-MM-DD',
    'YYYYMMDD',
    'YYYY/MM/DD',
    'YYYY.MM.DD',
    'YYYY年MM月DD日',
  ])
  if (!dayJs.isValid()) {
    return false
  }
  const year = dayJs.year()
  // 验证年
  const thisYearConst = thisYear()

  return !(year < 1900 || year > thisYearConst)
}
