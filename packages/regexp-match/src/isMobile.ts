import { isMatchRegex } from './isMatchRegex'

/**
 * 手机
 */
const MOBILE_PATTERN = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

/**
 * 中国香港移动电话
 * eg: 中国香港： +852 5100 4810， 三位区域码+10位数字, 中国香港手机号码8位数
 * eg: 中国大陆： +86  180 4953 1399，2位区域码标示+13位数字
 * 中国大陆 +86 Mainland China
 * 中国香港 +852 Hong Kong
 * 中国澳门 +853 Macao
 * 中国台湾 +886 Taiwan
 */
const MOBILE_HK_PATTERN = /^(?:0|852|\+852)?\d{8}$/

/**
 * 中国台湾移动电话
 * eg: 中国台湾： +886 09 60 000000， 三位区域码+号码以数字09开头 + 8位数字, 中国台湾手机号码10位数
 * 中国台湾 +886 Taiwan 国际域名缩写：TW
 */
const MOBILE_TW_PATTERN = /^(?:0|886|\+886)?(?:|-)09\d{8}$/

/**
 * 中国澳门移动电话
 * eg: 中国台湾： +853 68 00000， 三位区域码 +号码以数字6开头 + 7位数字, 中国台湾手机号码8位数
 * 中国澳门 +853 Macao 国际域名缩写：MO
 */
const MOBILE_MO_PATTERN = /^(?:0|853|\+853)?(?:|-)6\d{7}$/

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
