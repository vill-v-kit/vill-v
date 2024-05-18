# forceJsonParse

使`JSON.parse()` 必定成功，且拥有返回值

## Demo

```ts twoslash
import {forceJsonParse} from '@vill-v/vanilla'

forceJsonParse('[', 'string') // => ''
forceJsonParse('[', 'array') // => []
forceJsonParse('[', 'null') // => null
forceJsonParse('[', 'object') // => {}
forceJsonParse('[', 'origin') // => '['

forceJsonParse('[{"foor":"bar"}]', 'null') // =>[{foor:'bar'}]
forceJsonParse('[{foor:"bar"}]', 'null', true) // =>[{foor:'bar'}]
```

```ts
declare function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'origin', loose?: boolean): T | string;
declare function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'string', loose?: boolean): T | string;
declare function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'null', loose?: boolean): T | null;
declare function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'object', loose?: boolean): T;
declare function forceJsonParse<T = any>(jsonString: string | null | undefined, type: 'array', loose?: boolean): T[];
```
