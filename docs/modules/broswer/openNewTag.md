# openNewTag

`<a>`打开url的封装

## Demo

```ts twoslash
import {openNewTag} from '@vill-v/broswer'

openNewTag('https://developer.mozilla.org/zh-CN/', {target: '_blank'})

```

## DTS

```ts
import {LinkTargetContext} from '@vill-v/ts'

declare function openNewTag(url: string, opt?: {
  target?: LinkTargetContext | string;
}): void;
```
