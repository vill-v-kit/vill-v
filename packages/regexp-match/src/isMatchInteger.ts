import { isMatchRegex } from './isMatchRegex'

const INTEGER_PATTERN = /^\d+$/

/**
 * 是否为一个整数
 * '01233' -> true
 * '0.1'->false
 * '1true'->false
 * 11111->true
 * 1.1 ->false
 */
export const isMatchInteger = (value: string | number) => isMatchRegex(INTEGER_PATTERN, `${value}`)
