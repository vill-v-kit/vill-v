import isString from 'lodash.isstring'
import isNil from 'lodash.isnil'
import toLower from 'lodash.tolower'
import isEmpty from 'lodash.isempty'
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

/**
 * 比较两个字符是否相同
 *
 * @param c1         字符1
 * @param c2         字符2
 * @param ignoreCase 是否忽略大小写
 * @return 是否相同
 * @since 4.0.3
 */
export const isStringEquals = (c1: string, c2: string, ignoreCase = false) => {
  if (ignoreCase) {
    return toLower(c1) === toLower(c2)
  }
  return c1 === c2
}
/**
 * 隐藏字符串，通过开始和结束下标
 * @param str
 * @param startInclude
 * @param endExclude
 * @param replacedChar
 */
export const hideStringWithStartAndEnd = (
  str: string,
  startInclude: number,
  endExclude: number,
  replacedChar: string
) => {
  if (!str || isEmpty(str)) {
    return str || ''
  }
  const strLength = str.length
  if (startInclude > strLength) {
    return str || ''
  }
  if (endExclude > strLength) {
    endExclude = strLength
  }
  if (startInclude > endExclude) {
    // 如果起始位置大于结束位置，不替换
    return str || ''
  }

  let chars = ''
  for (let i = 0; i < strLength; i++) {
    if (i >= startInclude && i < endExclude) {
      chars += replacedChar
    } else {
      chars += str.charAt(i)
    }
  }
  return chars
}
