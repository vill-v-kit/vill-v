# resolveImage

`Promise` 包装的 `HTMLImageElement`

## Demo

```ts
import { resolveImage } from '@vill-v/broswer'
const image = await resolveImage('http://xxxx.png')
```

## DTS

```ts
declare const resolveImage: (src: string) => Promise<HTMLImageElement>
```
