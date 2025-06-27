# wrapperRaf

`requestAnimationFrame` 的封装

别名: `raf`

## Demo

```ts twoslash
// @noErrors
import {getScroll, raf,wrapperRaf} from '@vill-v/browser'

const wrapperRaf1 = wrapperRaf(() => {
  console.log(getScroll(window))
})

const raf1 = raf(()=>{
  console.log(getScroll(window))
})
/**
 * 取消所有回调
 */
Object.keys(wrapperRaf1.ids).forEach((id) => {
  wrapperRaf1.cancel(id)
})

```

### DTS

```ts

interface RafMap {
    [id: number]: number;
}

/**
 * 延迟指定帧调用requestAnimationFrame
 * @param callback
 * @param delayFrames 延迟的帧数
 */
declare function wrapperRaf(callback: () => void, delayFrames?: number): number;
declare namespace wrapperRaf {
    var cancel: (pid?: number | undefined) => void;
    var ids: RafMap;
}
```
