import { PropType } from 'vue'
import { VueTypeValidableDef, VueTypeDef } from 'vue-types'

/**
 * 初始化vue-props <br/>
 * {@link https://github.com/vueComponent/ant-design-vue/blob/next/components/_util/props-util/initDefaultProps.ts}
 * @param types
 * @param defaultProps
 */
const initDefaultProps = <T>(
  types: T,
  defaultProps: {
    [K in keyof T]?: T[K] extends VueTypeValidableDef<infer U>
      ? U
      : T[K] extends VueTypeDef<infer U>
      ? U
      : T[K] extends { type: PropType<infer U> }
      ? U
      : any
  }
): T => {
  const propTypes: T = { ...types } as T
  Object.keys(defaultProps).forEach((k) => {
    const prop = propTypes[k] as VueTypeValidableDef
    if (prop) {
      prop.default = defaultProps[k]
    } else {
      throw new Error(`not have ${k} prop`)
    }
  })
  return propTypes
}

export default initDefaultProps
