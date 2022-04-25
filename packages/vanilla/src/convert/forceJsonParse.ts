/**
 * 总有坑爹后端，返回给你不规范的json字符串，但项目已经是💩山，但你又没办法管
 * @private
 * @param jsonString
 * @param originValue
 */
function looseJsonParse(jsonString: string, originValue: any) {
  try {
    return Function(`"use strict";return (${jsonString})`)()
  } catch (e) {
    return originValue
  }
}

export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'origin',
  loose?: boolean
): T | string
export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'string',
  loose?: boolean
): T | string
export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'null',
  loose?: boolean
): T | null
export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'object',
  loose?: boolean
): T
export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'array',
  loose?: boolean
): T[]

/**
 * 有返回的json格式化
 * @param jsonString 输入的json字符串
 * @param type 格式化失败返回的类型
 * @param [loose] 降级处理不规范json字符串
 */
export function forceJsonParse(
  jsonString: string | null | undefined,
  type: 'string' | 'array' | 'null' | 'object' | 'origin',
  loose?: boolean
) {
  const typeMap = new Map<string, any>([
    ['string', ''],
    ['array', []],
    ['null', null],
    ['object', {}],
    ['origin', jsonString || ''],
  ])
  const originValue = typeMap.get(type)
  if (!jsonString) {
    return originValue
  }

  try {
    return JSON.parse(jsonString) || originValue
  } catch (error) {
    return loose ? looseJsonParse(jsonString, originValue) : originValue
  }
}
