# isAllItemVerified

## Demo

```ts twoslash
import { isAllItemVerified } from '@vill-v/vanilla'
import { isNumber } from '@vill-v/type-as'

isAllItemVerified([0, 1, '1'], (item) => isNumber(item)) // => false
isAllItemVerified([0, 1, 1], (item) => isNumber(item)) // => true
```

## DTS

```ts
declare const isAllItemVerified: <T>(array: T[], filter: (item: T, index: number, array: T[]) => boolean) => boolean;
```
