import dayjs, { Dayjs, ConfigType } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import arraySupport from 'dayjs/plugin/arraySupport'
import isLeapYearPlugin from 'dayjs/plugin/isLeapYear'

dayjs.extend(customParseFormat)
dayjs.extend(duration)
dayjs.extend(arraySupport)
dayjs.extend(isLeapYearPlugin)

/**
 * 当前时间，转换为{@link Date}对象
 *
 * @return 当前时间
 */
export const date = (): Date => new Date()

/**
 * 获得年的部分
 *
 * @param date 日期
 * @return 年的部分
 */
export const year = (date: Date): number => date.getFullYear()

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
 * @return 今年
 */
export const thisYear = (): number => year(date())

/**
 * 转换为moment工具
 * @param value
 * @param format
 */
export const toDayJs = (value: ConfigType, format?: string): Dayjs => dayjs(value, format)

/**
 * 格式化时间字符串
 * @param value
 * @param format
 */
export const parseDateString = (value: ConfigType, format: string) => toDayJs(value).format(format)

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
