/**
 * 比较两个字符是否相同
 *
 * @param c1         字符1
 * @param c2         字符2
 * @param ignoreCase 是否忽略大小写
 * @return 是否相同
 */
export const isStringEquals = (c1: string, c2: string, ignoreCase = false) => {
  if (ignoreCase) {
    return c1.toLowerCase() === c2.toLowerCase()
  }
  return c1 === c2
}
