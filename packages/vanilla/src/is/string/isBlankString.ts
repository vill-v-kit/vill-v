import { isNil, isString } from '@vill-v/type-as'

/**
 * 是否空白符<br>
 * 空白符包括空格、制表符、全角空格和不间断空格<br>
 * @param c
 */
export const isBlankChar = (c: string): boolean =>
  ['', ' ', '\t', '\r', '\n', '\f', '\ufeff', '\u202a', '\u0000'].includes(c)

/**
 * 字符串是否为空白<br>
 * 空白符包括空格、制表符、全角空格和不间断空格<br>
 * @param str
 */
export const isBlankString = (str?: string | null): str is null | undefined => {
  let length: number
  if (isNil(str) || (length = str.length) == 0) {
    return true
  }
  if (!isString(str)) {
    return true
  }
  for (let i = 0; i < length; i++) {
    // 只要有一个非空字符即为非空字符串
    if (!isBlankChar(str.charAt(i))) {
      return false
    }
  }
  return true
}

/**
 * 字符串是否为非空白<br>
 * 空白符包括空格、制表符、全角空格和不间断空格<br>
 * @param str
 */
export const isNotBlankString = (str?: string | null): str is string => !isBlankString(str)
