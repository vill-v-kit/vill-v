# isMatchInteger

是否是一个int字符串

## Demo

```ts
import {isMatchInteger} from '@vill-v/regexp-match'

/**
 * 是否为一个整数
 * '01233' -> true
 * '0.1'->false
 * '1true'->false
 * 11111->true
 * 1.1 ->false
 */
isMatchInteger('01233')

isMatchInteger(01233)
```

## DTS

```ts
declare const isMatchInteger: (value: string | number) => boolean;
```
