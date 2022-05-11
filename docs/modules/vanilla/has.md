# has

对象中是否拥有该key

::: warning 警告
该方法只支持在单层对象判断

如需要基于路径字符串进行解析，请使用：[hasByPath](/modules/path-prop/hasByPath)

```ts
import { hasByPath } from '@vill-v/path-prop'
```

:::

## Demo

```ts
import { has } from '@vill-v/path-prop'

has({ text: '' }, 'text') //=>true
```

## DTS

```ts
declare const has: (object: Record<string, any>, key: string) => boolean;
```
