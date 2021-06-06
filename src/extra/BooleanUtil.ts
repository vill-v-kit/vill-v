/**
 * 布尔值工具
 */
export default class BooleanUtil {
  /**
   * 切换原始布尔值
   * @param value
   */
  static toggleBoolean(value: boolean) {
    return !value
  }

  /**
   * 切换数字型 1真，0假
   * @param value
   */
  static toggleNumber(value: number) {
    return value === 0 ? 1 : 0
  }
}
