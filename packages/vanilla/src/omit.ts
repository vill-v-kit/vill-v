/**
 * 从 object 中 排除 部分key
 * @param obj
 * @param keys
 */
export const omit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const copyObject = Object.assign({}, obj)
  keys.forEach((key) => {
    delete copyObject[key]
  })
  return copyObject
}
