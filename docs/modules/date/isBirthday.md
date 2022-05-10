# isBirthday

判断日期是否是一个生日

本质是判断一个时间是否合法，并且年份大于1900

::: tip 提示
支持以下几种格式：

- YYYYMMDD
- YYYY-MM-DD
- YYYY/MM/DD
- YYYY.MM.DD
- YYYY年MM月DD日

占位符含义详见 [dayjs](https://dayjs.gitee.io/docs/zh-CN/parse/string-format)
:::

## Demo

```ts
import {isBirthday} from '@vill-v/date'

isBirthday('1960-01-03')
```

## DTS

```ts
declare const isBirthday: (value: string) => boolean;
```
