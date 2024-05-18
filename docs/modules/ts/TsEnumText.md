# TsEnumText

用作ts枚举与文字工具

## Demo

```ts twoslash
import { TsEnumText } from '@vill-v/ts'

enum Enum {
  ENUM1,
  ENUM2,
}

const EnumTextObj = {
  [Enum.ENUM1]: 'ENUM1',
  [Enum.ENUM2]: 'ENUM2',
}

const helper = new TsEnumText(EnumTextObj)
helper.text(Enum.ENUM1) // 'ENUM1'
helper.eq(Enum.ENUM1, 0) // true
helper.select() // [{label:'ENUM1',value:0},{label:'ENUM2',value:1}]
helper.select('title', 'key') // [{title:'ENUM1',key:0},{title:'ENUM2',key:1}]
```

## DTS

```ts
/**
 * 用作ts枚举文字定义关系工具
 * ```ts
 * enum Enum{
 *   ENUM1,
 *   ENUM2,
 * }
 * const EnumTextObj = {
 *   [Enum.ENUM1]:'ENUM1',
 *   [Enum.ENUM2]:'ENUM2',
 * }
 *
 * const helper = new TsEnumText(EnumTextObj)
 * helper.text(Enum.ENUM1) // 'ENUM1'
 * helper.eq(Enum.ENUM1,0) // true
 * helper.select('label','value') // [{label:'ENUM1',value:0},{label:'ENUM2',value:1}]
 * ```
 */
declare class TsEnumText<Enum = any> {
    private readonly enumTextObj;
    private readonly formatNumber;
    constructor(enumTextObj: Record<any, string>, formatNumber?: boolean);
    /**
     * 获取枚举值的文字
     * @param type
     * @param error
     * @returns
     */
    text(type: Enum, error?: string): string;
    /**
     * 比较两个枚举值是否相同
     * 内部使用 `===`
     * 如对函数式调用无过多的要求，可自行使用 `===` 比较
     * @param type
     * @param compare
     * @returns
     */
    eq(type: Enum, compare: Enum): boolean;
    /**
     * 比较枚举值是否在多个枚举值之中
     * 内部使用 `includes`
     * 如对函数式调用无过多的要求，可自行使用 `includes` 比较
     * @param type
     * @param compare
     * @returns
     */
    includes(type: Enum, compare: Enum[]): boolean;
    /**
     * 将枚举遍历为具有label，value的下拉框数组
     * @param labelKey
     * @param valueKey
     * @returns
     */
    select(labelKey?: string, valueKey?: string): {
        [x: string]: string | number;
    }[];
}
```
