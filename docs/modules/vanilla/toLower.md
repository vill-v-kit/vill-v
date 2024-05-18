# toLower

英文字符串小写

封装该方法只是为了防止值为`nil`时,`nil.toLowerCase()` 报错

您可以使用 `nil?.toLowerCase()`代替本方法

如果您确定值一定是字符串,请使用`''.toLowerCase()`

## Demo

```ts twoslash
import { toLower } from '@vill-v/vanilla'

toLower('ABC') //=> 'abc'
```

## DTS

```ts
declare const toLower: (value?: string) => string;
```
