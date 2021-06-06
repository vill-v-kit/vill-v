import { isString, isNil, toLower } from 'lodash-es'

/**
 * 是否空白符<br>
 * 空白符包括空格、制表符、全角空格和不间断空格<br>
 * @param c
 */
export function isBlankChar(c: string): boolean {
  return ['', ' ', '\t', '\r', '\n', '\f', '\ufeff', '\u202a', '\u0000'].includes(c)
}

/**
 * 字符串是否为空白<br>
 * 空白符包括空格、制表符、全角空格和不间断空格<br>
 * @param str
 */
export function isBlankString(str?: string | null): str is null | undefined {
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
export function isNotBlankString(str?: string | null): str is string {
  return !isBlankString(str)
}

/**
 * 比较两个字符是否相同
 *
 * @param c1         字符1
 * @param c2         字符2
 * @param ignoreCase 是否忽略大小写
 * @return 是否相同
 * @since 4.0.3
 */
export function isStringEquals(c1: string, c2: string, ignoreCase = false) {
  if (ignoreCase) {
    return toLower(c1) === toLower(c2)
  }
  return c1 === c2
}
