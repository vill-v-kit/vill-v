# parseDateString

格式化时间字符串

## Demo

```ts twoslash
import {parseDateString} from '@vill-v/date'

parseDateString(1652173543541, 'YYYY-MM-DD HH:mm:ss')
```

## DTS

```ts
declare const parseDateString: (value: ConfigType, format: string, error?: any) => any;
```
