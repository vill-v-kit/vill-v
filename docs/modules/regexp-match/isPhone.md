# isPhone

验证手机号

## Demo

```ts twoslash
import {isMobile, isMobileHk, isMobileMo, isMobileTw, isPhone} from '@vill-v/regexp-match'

/**
 * 验证是否为手机号码（中国）
 *
 * @param value 值
 * @return 是否为手机号码（中国）
 */
isMobile('1111111')
/**
 * 验证是否为手机号码（中国香港）
 * @param value 手机号码
 * @return 是否为中国香港手机号码
 */
isMobileHk('1111111')
/**
 * 验证是否为手机号码（中国台湾）
 * @param value 手机号码
 * @return 是否为中国台湾手机号码
 */
isMobileTw('1111111')
/**
 * 验证是否为手机号码（中国澳门）
 * @param value 手机号码
 * @return 是否为中国澳门手机号码
 */
isMobileMo('1111111')
/**
 * 验证是否为手机号码（CharUtil中国） 手机号号码（中国香港,中国台湾,中国澳门）
 *
 * @param value 值
 * @return 是否为手机号码（中国）+手机号码（中国香港）+手机号码（中国台湾）+手机号码（中国澳门）
 */
isPhone('1111111')
```

## DTS

```ts
/**
 * 验证是否为手机号码（中国）
 *
 * @param value 值
 * @return 是否为手机号码（中国）
 */
declare function isMobile(value: string): boolean;

/**
 * 验证是否为手机号码（中国香港）
 * @param value 手机号码
 * @return 是否为中国香港手机号码
 */
declare function isMobileHk(value: string): boolean;

/**
 * 验证是否为手机号码（中国台湾）
 * @param value 手机号码
 * @return 是否为中国台湾手机号码
 */
declare function isMobileTw(value: string): boolean;

/**
 * 验证是否为手机号码（中国澳门）
 * @param value 手机号码
 * @return 是否为中国澳门手机号码
 */
declare function isMobileMo(value: string): boolean;

/**
 * 验证是否为手机号码（CharUtil中国） 手机号号码（中国香港,中国台湾,中国澳门）
 *
 * @param value 值
 * @return 是否为手机号码（中国）+手机号码（中国香港）+手机号码（中国台湾）+手机号码（中国澳门）
 */
declare function isPhone(value: string): boolean;
```
