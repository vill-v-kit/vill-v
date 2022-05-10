# imgUrlToBase64

一个图片网址 转换为 `data:base64`

::: tip 提示
内部使用 canvas 实现，请注意跨域和图片大小
:::

## Demo

```ts
import {imgUrlToBase64} from '@vill-v/broswer'

imgUrlToBase64('https://**.com/logo.png', 'image/png')
```

## DTS

```ts
declare function imgUrlToBase64(url: string, mineType?: string): Promise<string>;
```
