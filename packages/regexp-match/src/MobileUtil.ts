import {
  MOBILE_PATTERN,
  MOBILE_HK_PATTERN,
  MOBILE_MO_PATTERN,
  MOBILE_TW_PATTERN,
  isMatchRegex,
} from './Pattern'

/**
 *  手机号验证工具
 */
/**
 * 验证是否为手机号码（中国）
 *
 * @param value 值
 * @return 是否为手机号码（中国）
 */
export function isMobile(value: string): boolean {
  return isMatchRegex(MOBILE_PATTERN, value)
}

/**
 * 验证是否为手机号码（中国香港）
 * @param value 手机号码
 * @return 是否为中国香港手机号码
 */
export function isMobileHk(value: string): boolean {
  return isMatchRegex(MOBILE_HK_PATTERN, value)
}

/**
 * 验证是否为手机号码（中国台湾）
 * @param value 手机号码
 * @return 是否为中国台湾手机号码
 */
export function isMobileTw(value: string): boolean {
  return isMatchRegex(MOBILE_TW_PATTERN, value)
}

/**
 * 验证是否为手机号码（中国澳门）
 * @param value 手机号码
 * @return 是否为中国澳门手机号码
 */
export function isMobileMo(value: string): boolean {
  return isMatchRegex(MOBILE_MO_PATTERN, value)
}

/**
 * 验证是否为手机号码（CharUtil中国） 手机号号码（中国香港,中国台湾,中国澳门）
 *
 * @param value 值
 * @return 是否为手机号码（中国）+手机号码（中国香港）+手机号码（中国台湾）+手机号码（中国澳门）
 */
export function isPhone(value: string): boolean {
  return isMobile(value) || isMobileHk(value) || isMobileTw(value) || isMobileMo(value)
}
