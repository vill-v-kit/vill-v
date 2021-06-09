import { isArray, isString, isObject, has } from 'lodash-es'

/**
 * classnames动态样式class组装 <br/>
 * {@link https://github.com/vueComponent/ant-design-vue/blob/next/components/_util/classNames.ts}
 * @param args
 */
function classNames(...args: any[]) {
  const classes: string[] = []
  for (let i = 0; i < args.length; i++) {
    const value = args[i]
    if (!value) continue
    if (isString(value)) {
      classes.push(value)
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const inner = classNames(value[i])
        if (inner) {
          classes.push(inner)
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (has(value, name) && value[name]) {
          classes.push(name)
        }
      }
    }
  }
  return classes.join(' ')
}

export default classNames
