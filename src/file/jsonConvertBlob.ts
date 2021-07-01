import { isBlankString } from '../extra'
import { isString } from 'lodash-es'

/**
 * blob转json
 * 用于axios选择转换为blob时，对后台正常json报错进行读取
 * @param blob
 * @param format
 */
export function blobToJson(blob: Blob, format = 'utf-8'): Promise<Record<string, any> | null> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (res) => {
      const result = res.target?.result
      if (!isString(result)) {
        return resolve(null)
      }
      if (isBlankString(result)) {
        return resolve(null)
      }
      try {
        const json = JSON.parse(result)
        return resolve(json)
      } catch (e) {
        return reject(e)
      }
    }
    fileReader.onerror = (e) => {
      return reject(e)
    }
    fileReader.readAsText(blob, format)
  })
}
