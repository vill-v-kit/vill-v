import moment from 'moment'

/**
 * 时间工具
 * 注：1.只封装项目中使用的方法，封装无意义的方法只是徒增包大小
 */
export default class DateUtil {
  /**
   * 当前时间，转换为{@link Date}对象
   *
   * @return 当前时间
   */
  public static date(): Date {
    return new Date()
  }

  /**
   * 获得年的部分
   *
   * @param date 日期
   * @return 年的部分
   */
  public static year(date: Date): number {
    return date.getFullYear()
  }

  /**
   * @return 今年
   */
  public static thisYear(): number {
    return this.year(this.date())
  }

  public static isLeapYear(year: number): boolean {
    return moment([year]).isLeapYear()
  }

  public static toMoment(value: moment.MomentInput): moment.Moment {
    return moment(value)
  }
}
