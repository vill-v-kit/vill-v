# isWindow

是否是浏览器环境顶层 `window` 对象

## Demo

```ts
import { isWindow } from '@vill-v/vanilla'

isWindow(window) //=>true 
```

## DTS

```ts
declare const isWindow: (value: any) => value is Window;
```
