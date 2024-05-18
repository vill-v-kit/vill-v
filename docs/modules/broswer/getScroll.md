# getScroll

获取元素的滚动距离

## Demo

```ts twoslash
import {getScroll} from '@vill-v/broswer'

// 获取scrollTop
getScroll(document.getElementById('app'), true)

// 获取scrollLeft
getScroll(document.getElementById('app'), false)
```

## DTS

```ts
declare function getScroll(target: HTMLElement | Window | Document | null, top: boolean): number;
```
