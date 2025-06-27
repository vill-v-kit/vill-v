# resolveImage

`Promise` 包装的 `HTMLImageElement`

## Demo

```ts twoslash
import { resolveImage } from '@vill-v/browser'

const image = await resolveImage('http://xxxx.png')
```

## DTS

```ts
declare const resolveImage: (src: string) => Promise<HTMLImageElement>
```
