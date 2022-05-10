# isMatchRegex
正则是否匹配

## Demo

```ts
import {isMatchRegex} from '@vill-v/regexp-match'

isMatchRegex(/^g/, 'test')
```

## DTS

```ts
declare function isMatchRegex(pattern: RegExp, value: string): boolean;
```
