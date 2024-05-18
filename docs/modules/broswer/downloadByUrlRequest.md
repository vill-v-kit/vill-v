# downloadByUrlRequest

通过网络请求下载文件

## Demo

```ts twoslash
import { downloadByUrlRequest } from '@vill-v/broswer'

downloadByUrlRequest({
  url: 'https://xxx.xxx.xxx',
  target: '_blank',
  fileName: 'xxx.pdf',
})
  .then(() => {
    console.log('下载成功')
  })
  .catch(() => {
    console.log('下载失败')
  })
  .finally(() => {
    console.log('下载完成')
  })
```

## DTS

```ts
/**
 * 通过请求的方式下载
 * @param url
 * @param target
 * @param fileName
 */
declare function downloadByUrlRequest({
  url,
  target,
  fileName,
}: {
  url: string
  target?: LinkTargetContext
  fileName?: string
}): Promise<void>
```
