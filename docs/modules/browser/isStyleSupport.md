# isStyleSupport

js 检测当前浏览器是否支持某一个css前沿特性

## Demo

```ts twoslash
import {isStyleSupport} from '@vill-v/browser'

isStyleSupport('gap')

isStyleSupport(['gap'])
```

## DTS

```ts
declare const isStyleSupport: (styleName: string | Array<string>) => boolean;
```
