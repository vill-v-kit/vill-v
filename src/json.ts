export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'origin'
): T | string
export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'string'
): T | string
export function forceJsonParse<T = any>(
  jsonString: string | null | undefined,
  type: 'null'
): T | null
export function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'object'): T
export function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'array'): T[]
/**
 * 有返回的json格式化
 * @param jsonString
 * @param type
 */
export function forceJsonParse(
  jsonString: string | null | undefined,
  type: 'string' | 'array' | 'null' | 'object' | 'origin'
) {
  const typeMap = new Map<string, any>([
    ['string', ''],
    ['array', []],
    ['null', null],
    ['object', {}],
    ['origin', jsonString],
  ])
  const originValue = typeMap.get(type)
  let json: any = originValue
  if (!jsonString) {
    return originValue
  }

  try {
    json = JSON.parse(jsonString) || originValue
  } catch (error) {
    return json
  }
  return json
}
