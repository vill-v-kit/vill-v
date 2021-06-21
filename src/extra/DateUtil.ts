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
 * @return 今年
 */
export const thisYear = (): number => year(date())

/**
 * 转换为moment工具
 * @param value
 */
export function toMoment(value: moment.MomentInput): moment.Moment {
  return moment(value)
}

/**
 * 是否是闰年
 * @param year
 */
export function isLeapYear(year: number): boolean {
  return toMoment([year]).isLeapYear()
}
