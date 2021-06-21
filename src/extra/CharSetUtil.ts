import { isEmpty } from 'lodash-es'
import { canIUse } from '../env'

type DefaultCharSet = 'utf-8' | 'utf8' | 'UTF-8' | 'gbk' | 'GBK' | 'GB2312' | string

/**
 * 文本转二进制数组
 * 仅支持UTF-8
 * @param value
 */
export const textEncode = (value: string): Uint8Array | null => {
  if (!canIUse('TextEncoder')) {
    return null
  }
  const encoder = new TextEncoder()
  return encoder.encode(value)
}
/**
 * 二进制数组转文本
 * @param value
 * @param charSet
 */
export const textDecode = (value: Uint8Array, charSet: DefaultCharSet): string => {
  if (!canIUse('TextDecoder')) {
    return ''
  }
  if (!value || isEmpty(value)) {
    return ''
  }
  try {
    const decoder = new TextDecoder(charSet)
    return decoder.decode(value)
  } catch (e) {
    return ''
  }
}
