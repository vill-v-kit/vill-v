import { Properties } from 'csstype'

/**
 * CSSProperties 的提示工具
 * @param style
 */
const createStyleObject = (style?: Properties) => {
  return style || {}
}

export { createStyleObject as cso }

export default createStyleObject
