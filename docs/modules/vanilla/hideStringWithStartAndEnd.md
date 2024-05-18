# hideStringWithStartAndEnd

输入开始和结束下标,隐藏字符串内容

## Demo

```ts twoslash
import { hideStringWithStartAndEnd } from '@vill-v/vanilla'

hideStringWithStartAndEnd('foor_bar', 0, 4, '*') // => '****_bar'
```

## DTS

```ts
declare const hideStringWithStartAndEnd: (str: string, startInclude: number, endExclude: number, replacedChar: string) => string;
```
