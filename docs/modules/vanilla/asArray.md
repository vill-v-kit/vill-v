# asArray

将任何入参包装一层作为数组使用

## Demo

```ts twoslash
import { asArray } from '@vill-v/vanilla'
asArray('')
// ['']

asArray(1)
// [1]

asArray(true)
// [true]

asArray([])
// []
```

## DTS

```ts
/**
 * 将任何入参都包装成数组
 * @param value
 */
declare const asArray: <T>(value: T | T[]) => T[]
```
