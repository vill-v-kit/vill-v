import moment from 'moment'

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
export const age = (birthday: moment.Moment, dateToCompare = moment()): number => {
  if (!birthday) {
    return 0
  }
  return moment.duration(dateToCompare.diff(birthday)).years()
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
export const toMoment = (value: moment.MomentInput, format?: string): moment.Moment =>
  moment(value, format)

/**
 * 格式化时间字符串
 * @param value
 * @param format
 */
export const parseDateString = (value: moment.MomentInput, format: string) =>
  toMoment(value).format(format)

/**
 * 格式化时间
 * @param value
 * @param format
 */
export const parseDate = (value: moment.MomentInput, format: string) =>
  toMoment(value, format).toDate()

/**
 * 是否是闰年
 * @param year
 */
export const isLeapYear = (year: number): boolean => toMoment([year]).isLeapYear()
