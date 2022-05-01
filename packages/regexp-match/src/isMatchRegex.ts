/**
 * 通过正则表达式验证
 *
 * @param pattern 正则模式
 * @param value   值
 * @return 是否匹配正则
 */
export function isMatchRegex(pattern: RegExp, value: string): boolean {
  if (!value || !pattern) {
    return false
  }
  return pattern.test(value)
}
