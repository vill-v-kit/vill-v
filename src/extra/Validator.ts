import DateUtil from './DateUtil'
import PatternPool from './PatternPool'
import ReUtil from './ReUtil'

/**
 * 验证用工具
 * 注：1.只封装项目中使用的方法，封装无意义的方法只是徒增包大小
 */
export default class Validator {
  /**
   * 生日
   */
  public static BIRTHDAY = PatternPool.BIRTHDAY

  public static MOBILE = PatternPool.MOBILE

  /**
   * 通过正则表达式验证
   *
   * @param pattern 正则模式
   * @param value   值
   * @return 是否匹配正则
   */
  public static isMatchRegex(pattern: RegExp, value: string): boolean {
    return ReUtil.isMatch(pattern, value)
  }

  /**
   * 验证是否为生日
   *
   * @param year  年，从1900年开始计算
   * @param month 月，从1开始计数
   * @param day   日，从1开始计数
   * @return 是否为生日
   */
  public static isBirthdayByDate(year: number, month: number, day: number) {
    // 验证年
    const thisYear = DateUtil.thisYear()
    if (year < 1900 || year > thisYear) {
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
      return day < 29 || (day == 29 && DateUtil.isLeapYear(year))
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
  public static isBirthday(value: string): boolean {
    const matcher = this.BIRTHDAY.exec(value)
    if (matcher?.length === 6) {
      const year = parseInt(matcher[1])
      const month = parseInt(matcher[3])
      const day = parseInt(matcher[5])
      return this.isBirthdayByDate(year, month, day)
    }
    return false
  }

  /**
   * 验证是否为手机号码（中国）
   *
   * @param value 值
   * @return 是否为手机号码（中国）
   */
  public static isMobile(value: string): boolean {
    return this.isMatchRegex(this.MOBILE, value)
  }
}
