# TsEnumText

用作ts枚举与文字工具

## Demo

```ts
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
helper.select('label', 'value') // [{label:'ENUM1',value:0},{label:'ENUM2',value:1}]
```

## DTS

```ts
declare class TsEnumText<Enum = any> {
  constructor(enumTextObj: Record<any, string>);

  text(type: Enum, error?: string): string;

  eq(type: Enum, compare: Enum): boolean;

  select(labelKey: string | undefined, valueKey: 'value'): {
    [x: string]: string;
    value: string;
  }[];
}
```
