import { isArrayEmpty } from './isEmpty'

/**
 * 是否数组每项都符合条件
 * @param array
 * @param filter
 */
export const isAllItemVerified = <T>(
  array: T[],
  filter: (item: T, index: number, array: T[]) => boolean
) => {
  if (!array || !Array.isArray(array) || isArrayEmpty(array)) {
    return false
  }
  const arrayLength = array.length
  return array.filter((item, index, array) => filter?.(item, index, array)).length === arrayLength
}
