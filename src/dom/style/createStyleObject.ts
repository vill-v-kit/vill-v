import type { Properties, PropertiesHyphen } from 'csstype'

export interface CSSProperties
  extends Properties<string | number>,
    PropertiesHyphen<string | number> {}

/**
 * CSSProperties 的提示工具
 * @param style
 */
const createStyleObject = (style?: CSSProperties): any => {
  return style || {}
}

export { createStyleObject as cso }

export default createStyleObject
