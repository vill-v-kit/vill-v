/**
 * 切换原始布尔值
 * @param value
 */
export function toggleBoolean(value: boolean) {
  return !value
}

/**
 * 切换数字型 1真，0假
 * @param value
 */
export function toggleNumber(value: number) {
  return value === 0 ? 1 : 0
}
