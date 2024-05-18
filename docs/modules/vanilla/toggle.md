# toggle

对 类似`bool`值进行取反

## Demo

```ts twoslash
import { toggle, toggleBoolean, toggleNumber, toggleText } from '@vill-v/vanilla'

toggle('是') // => '否'
toggle('是', '是', 'fasle') // => 'fasle'
toggleText('是') // => '否'
toggleText('是', '是', 'fasle') // => 'fasle'

toggle(1) // => 0
toggle(1, 1, 2) // =>2
toggleNumber(1) // => 0
toggleNumber(1, 1, 2) // =>2

toggle(true) // => false
toggleBoolean(true) // => false
```

## DTS

```ts
/**
 * 切换原始布尔值
 * @param value
 */
declare const toggleBoolean: (value: boolean) => boolean;
/**
 * 切换数字型
 * 默认1真，0假
 * @param value
 * @param correct
 * @param error
 */
declare const toggleNumber: (value: number, correct?: number, error?: number) => number;
/**
 * 切换文字型
 * 默认'是'真，'否'假
 * @param value
 * @param correct
 * @param error
 */
declare const toggleText: (value: string, correct?: string, error?: string) => string;

/**
 * 切换真假string
 * 默认'是'真，'否'假
 * @param value
 * @param correct
 * @param error
 */
declare function toggle(value: string, correct?: string, error?: string): string;
/**
 * 切换真假number
 * 默认1真，0假
 * @param value
 * @param correct
 * @param error
 */
declare function toggle(value: number, correct?: number, error?: number): number;
/**
 * 切换真假boolean
 * @param value
 */
declare function toggle(value: boolean): boolean;
```
