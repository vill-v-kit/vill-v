import PatternPool from './PatternPool'
import Validator from './Validator'

/**
 *  手机号验证工具
 */
export default class MobileUtil {
  /**
   * 验证是否为手机号码（中国）
   *
   * @param value 值
   * @return 是否为手机号码（中国）
   */
  public static isMobile(value: string): boolean {
    return Validator.isMatchRegex(PatternPool.MOBILE, value)
  }

  /**
   * 验证是否为手机号码（中国香港）
   * @param value 手机号码
   * @return 是否为中国香港手机号码
   */
  public static isMobileHk(value: string): boolean {
    return Validator.isMatchRegex(PatternPool.MOBILE_HK, value)
  }

  /**
   * 验证是否为手机号码（中国台湾）
   * @param value 手机号码
   * @return 是否为中国台湾手机号码
   */
  public static isMobileTw(value: string): boolean {
    return Validator.isMatchRegex(PatternPool.MOBILE_TW, value)
  }

  /**
   * 验证是否为手机号码（中国澳门）
   * @param value 手机号码
   * @return 是否为中国澳门手机号码
   */
  public static isMobileMo(value: string): boolean {
    return Validator.isMatchRegex(PatternPool.MOBILE_MO, value)
  }

  /**
   * 验证是否为手机号码（CharUtil中国） 手机号号码（中国香港,中国台湾,中国澳门）
   *
   * @param value 值
   * @return 是否为手机号码（中国）+手机号码（中国香港）+手机号码（中国台湾）+手机号码（中国澳门）
   */
  public static isPhone(value: string): boolean {
    return (
      this.isMobile(value) ||
      this.isMobileHk(value) ||
      this.isMobileTw(value) ||
      this.isMobileMo(value)
    )
  }
}
