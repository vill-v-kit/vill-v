# toDayJs

转换为dayjs工具

作用只是帮助项目不用显式安装dayJS

## Demo

```ts twoslash
import {toDayJs} from '@vill-v/date'

toDayJs('1901-11-02')
```

## DTS

```ts
declare const toDayJs: (value: ConfigType, format?: string | undefined) => Dayjs;
```
