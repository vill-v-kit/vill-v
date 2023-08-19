/**
 * 用作ts枚举文字定义关系工具
 * ```ts
 * enum Enum{
 *   ENUM1,
 *   ENUM2,
 * }
 * const EnumTextObj = {
 *   [Enum.ENUM1]:'ENUM1',
 *   [Enum.ENUM2]:'ENUM2',
 * }
 *
 * const helper = new TsEnumText(EnumTextObj)
 * helper.text(Enum.ENUM1) // 'ENUM1'
 * helper.eq(Enum.ENUM1,0) // true
 * helper.select('label','value') // [{label:'ENUM1',value:0},{label:'ENUM2',value:1}]
 * ```
 */
export class TsEnumText<Enum = any> {
  private readonly enumTextObj: Record<any, string>
  private readonly formatNumber: boolean

  constructor(enumTextObj: Record<any, string>, formatNumber = false) {
    this.enumTextObj = enumTextObj
    this.formatNumber = formatNumber
  }

  text(type: Enum, error = '') {
    return this.enumTextObj[type] || error
  }

  eq(type: Enum, compare: Enum) {
    return type === compare
  }

  select(labelKey = 'label', valueKey = 'value') {
    return Object.keys(this.enumTextObj).map((value) => ({
      [valueKey]: this.formatNumber ? +value : value,
      [labelKey]: this.enumTextObj[value],
    }))
  }
}
