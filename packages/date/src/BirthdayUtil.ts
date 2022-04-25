import { thisYear } from './date'
import { isLeapYear } from './dayjs'
import { BIRTHDAY_PATTERN } from '@vill-v/regexp-match'

/**
 * 生日
 */
const BIRTHDAY = BIRTHDAY_PATTERN

/**
 * 验证是否为生日
 *
 * @param year  年，从1900年开始计算
 * @param month 月，从1开始计数
 * @param day   日，从1开始计数
 * @return 是否为生日
 */
export const isBirthdayByDate = (year: number, month: number, day: number): boolean => {
  // 验证年
  const thisYearConst = thisYear()
  if (year < 1900 || year > thisYearConst) {
    return false
  }

  // 验证月
  if (month < 1 || month > 12) {
    return false
  }

  // 验证日
  if (day < 1 || day > 31) {
    return false
  }
  // 检查几个特殊月的最大天数
  if (day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    return false
  }
  if (month == 2) {
    // 在2月，非闰年最大28，闰年最大29
    return day < 29 || (day == 29 && isLeapYear(year))
  }
  return true
}

/**
 * 验证是否为生日<br>
 * 只支持以下几种格式：
 * <ul>
 * <li>yyyyMMdd</li>
 * <li>yyyy-MM-dd</li>
 * <li>yyyy/MM/dd</li>
 * <li>yyyy.MM.dd</li>
 * <li>yyyy年MM月dd日</li>
 * </ul>
 *
 * @param value 值
 * @return 是否为生日
 */
export const isBirthday = (value: string): boolean => {
  const matcher = BIRTHDAY.exec(value)
  if (matcher?.length === 6) {
    const year = parseInt(matcher[1])
    const month = parseInt(matcher[3])
    const day = parseInt(matcher[5])
    return isBirthdayByDate(year, month, day)
  }
  return false
}
