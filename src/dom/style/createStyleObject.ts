import { CSSProperties } from 'vue'

/**
 * CSSProperties 的提示工具
 * @param style
 */
const createStyleObject = (style?: CSSProperties) => {
  return style || {}
}

export { createStyleObject as cso }

export default createStyleObject
