import { CSSProperties, VNodeChild, PropType } from 'vue'
import { VueTypeValidableDef, fromType, any, oneOfType, string, toType } from 'vue-types'

const vNode = () => fromType('vNode', any() as VueTypeValidableDef<VNodeChild | JSX.Element>)
const styleObject = () =>
  toType('styleObject', {
    type: Object as PropType<CSSProperties>,
  })
const style = () => fromType('style', oneOfType([string(), styleObject()]))
const looseBool = () =>
  toType('looseBool', {
    type: Boolean,
  })

export { vNode, style, looseBool, styleObject }
export * from 'vue-types'
