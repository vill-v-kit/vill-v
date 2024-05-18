# blobToJson

将`blob` 转换为 `json`

用于解决 `XMLHttpRequest` 设置 `responseType:'blob'`时 服务端返回json的解析

## Demo

```ts twoslash
import { blobToJson, blobToJsonLegacy, blobToJsonModern } from '@vill-v/broswer'

const xhr = new XMLHttpRequest()
xhr.open('get', 'http://xxxx.xxx.xxx', true)
xhr.responseType = 'blob'
xhr.onload = async (ev) => {
  // 只使用 FileReader 进行转换
  await blobToJsonLegacy(xhr.response, 'utf-8')
  // 只使用  `blob.text()` 进行转换
  await blobToJsonModern(xhr.response)
  // 自动检测兼容性
  // 在现代浏览器 使用 `blob.text()` 进行转换
  // 在不支持该特性的浏览器内 使用 `FileReader` 进行转换
  await blobToJson(xhr.response, 'utf-8')
}
xhr.send()
```

## DTS

```ts
/**
 * blob转json
 * 用于axios选择转换为blob时，对后台正常json报错进行读取
 *
 * 使用 `FileReader` 进行转换
 * @param blob
 * @param format
 */
declare const blobToJsonLegacy: <T extends Record<string, any> = Record<string, any>>(
  blob: Blob,
  format?: string
) => Promise<T | null>
/**
 * blob转json
 * 用于axios选择转换为blob时，对后台正常json报错进行读取
 *
 * 使用 `blob.text()` 进行转换
 * @param blob
 */
declare const blobToJsonModern: <T extends Record<string, any> = Record<string, any>>(
  blob: Blob
) => Promise<T>
/**
 * blob转json
 * 用于axios选择转换为blob时，对后台正常json报错进行读取
 *
 *  在现代浏览器 使用 `blob.text()` 进行转换
 *  在不支持该特性的浏览器内 使用 `FileReader` 进行转换
 * @param blob
 * @param format
 */
declare function blobToJson<T extends Record<string, any> = Record<string, any>>(
  blob: Blob,
  format?: string
): Promise<T | null>
```
