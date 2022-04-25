export default class Base64Util {
  /**
   * 编码
   * @param value
   * @private
   */
  public static encode(value: string) {
    return window.btoa(value)
  }

  /**
   * 解码
   * @param value
   * @private
   */
  public static decode(value: string) {
    return window.atob(value)
  }
}
