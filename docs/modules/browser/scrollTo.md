# scrollTo

带动画的纵向滚动方法

## Demo

```ts twoslash
import {scrollTo} from '@vill-v/browser'

// window 滚动至100px
scrollTo(100)

scrollTo(100, {
  // 默认滚动距离，模式是window
  getContainer: () => document.getElementById('app')!,
  // 滚动返回函数
  callback: () => {
    console.log('我滚完了')
  },
  // 滚动动画持续时间，默认450
  duration: 200
})
```

## DTS

```ts

interface ScrollToOptions {
  // 默认滚动距离，默认是window
  getContainer?: () => HTMLElement | Window | Document;
  // 滚动返回函数
  callback?: () => any;
  // 滚动动画持续时间，默认450
  duration?: number;
}

/**
 * 滚动至纵向距离
 * @param y
 * @param options
 */
declare function scrollTo(y: number, options?: ScrollToOptions): void;
```
