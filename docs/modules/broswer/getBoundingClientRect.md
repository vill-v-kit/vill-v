# getBoundingClientRect

获取元素的布局信息

## Demo

```ts twoslash
import { getBoundingClientRect } from '@vill-v/broswer'

getBoundingClientRect(document.getElementById('app')!)
```

## DTS

```ts
declare function getBoundingClientRect(element: Element): DOMRect | undefined;
```
