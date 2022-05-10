# age

计算年龄

## Demo

```ts
import {age, toDayJs} from '@vill-v/date'

age(toDayJs('1970-11-06'), toDayJs('2021-11-11'))
```

## DTS

```ts
import {Dayjs} from 'dayjs'

declare const age: (birthday: Dayjs, dateToCompare?: Dayjs) => number;
```
