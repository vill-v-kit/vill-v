import dayjs, { ConfigType, Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import arraySupport from 'dayjs/plugin/arraySupport'
import isLeapYearPlugin from 'dayjs/plugin/isLeapYear'

dayjs.extend(customParseFormat)
dayjs.extend(duration)
dayjs.extend(arraySupport)
dayjs.extend(isLeapYearPlugin)
/**
 * 计算年龄
 * @param birthday
 * @param dateToCompare
 */
export const age = (birthday: Dayjs, dateToCompare = dayjs()): number => {
  if (!birthday) {
    return 0
  }
  return dayjs.duration(dateToCompare.diff(birthday)).years()
}

/**
 * 转换为dayjs工具
 * @param value
 * @param format
 */
export const toDayJs = (value: ConfigType, format?: string): Dayjs => dayjs(value, format)

/**
 * 检查dayJs是否合法，并返回错误占位值
 * @param value
 * @param error
 */
export const checkDateValue = (value: ConfigType, error?: string) => {
  const _error = error || ''
  if (!value) {
    return _error
  }
  return toDayJs(value).isValid() ? value : _error
}

/**
 * 格式化时间字符串
 * @param value
 * @param format
 * @param error 是否验证时间合法，验证则填写验证失败返回值
 */
export const parseDateString = (value: ConfigType, format: string, error?: any) => {
  if (error && !checkDateValue(value)) {
    return error || ''
  }
  return toDayJs(value).format(format)
}

/**
 * 格式化时间
 * @param value
 * @param format
 */
export const parseDate = (value: ConfigType, format: string) => toDayJs(value, format).toDate()

/**
 * 是否是闰年
 * @param year
 */
export const isLeapYear = (year: number): boolean => toDayJs([year]).isLeapYear()
