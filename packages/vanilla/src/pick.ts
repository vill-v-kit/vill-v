/**
 * 从 object 中 选取 部分key
 * @param obj
 * @param keys
 */
export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
  const copyObject: any = {}
  keys.forEach((key) => {
    copyObject[key] = obj[key]
  })
  return copyObject
}
