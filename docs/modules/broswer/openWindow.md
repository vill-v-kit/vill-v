# openWindow

`window.open()` 的封装
## Demo

```ts
import {openWindow} from '@vill-v/broswer'

openWindow('https://developer.mozilla.org/zh-CN/', {
  target: '_balnk',
  noopener: true,
  noreferrer: true
})
```

## DTS

```ts
import {LinkTargetContext} from '@vill-v/ts'

declare function openWindow(url: string, opt?: {
  target?: LinkTargetContext | string;
  noopener?: boolean;
  noreferrer?: boolean;
}): Window | null;
```
