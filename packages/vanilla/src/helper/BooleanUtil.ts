import { isBoolean, isNumber, isString } from '@vill-v/type-as'

/**
 * 切换原始布尔值
 * @param value
 */
export const toggleBoolean = (value: boolean) => !value

/**
 * 切换数字型
 * 默认1真，0假
 * @param value
 * @param correct
 * @param error
 */
export const toggleNumber = (value: number, correct = 1, error = 0) =>
  value === correct ? error : correct

/**
 * 切换文字型
 * @param value
 * @param correct
 * @param error
 */
export const toggleText = (value: string, correct = '是', error = '否') =>
  value === correct ? error : correct

/**
 * 切换真假string
 * @param value
 * @param correct
 * @param error
 */
export function toggle(value: string, correct?: string, error?: string): string
/**
 * 切换真假number
 * @param value
 * @param correct
 * @param error
 */
export function toggle(value: number, correct?: number, error?: number): number
/**
 * 切换真假boolean
 * @param value
 */
export function toggle(value: boolean): boolean
/**
 * 切换真假
 * @param value
 * @param correct
 * @param error
 */
export function toggle(value: any, correct?: any, error?: any) {
  if (isBoolean(value)) {
    return toggleBoolean(value)
  }
  if (isString(value)) {
    return toggleText(value, correct, error)
  }
  if (isNumber(value)) {
    return toggleNumber(value, correct, error)
  }
  throw new Error('仅支持string，number，boolean类型的切换')
}
