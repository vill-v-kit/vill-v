import { Properties } from 'csstype'

export type CSSProperties = Properties<number | string>

/**
 * CSSProperties 的提示工具
 * @param style
 */
const createStyleObject = (style?: CSSProperties) => {
  return style || {}
}

export { createStyleObject as cso }

export default createStyleObject
