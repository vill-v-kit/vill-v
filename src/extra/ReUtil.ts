/**
 * 正则工具
 * 注：1.只封装项目中使用的方法，封装无意义的方法只是徒增包大小
 */
export default class ReUtil {
  /**
   * 是否符合
   * @param pattern
   * @param content
   */
  public static isMatch(pattern: RegExp, content: string) {
    if (!content || !pattern) {
      return false
    }
    return pattern.test(content)
  }
}
