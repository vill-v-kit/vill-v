import { isStringEmpty } from '../is'

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
  if (!str || isStringEmpty(str)) {
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
