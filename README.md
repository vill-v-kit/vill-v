# Seele-utils

白鸢个人工具包

## PropTypes

vue-types的封装 ，基础属性见[vue-types](https://dwightjack.github.io/vue-types/)

### 特殊方法

```tsx

// 基础的bool值，不具备响应式能力
PropTypes.looseBool.def(false)

// 说明这是一个 CSSProperties 样式对象
PropTypes.style.def(null)

// 说明这是一个组件插槽
PropTypes.VNodeChild
```

## extra·额外包

基于java的 [hutool](https://hutool.cn/docs) 库做的js改写，仅改写了业务常用方法

### Base64Util

base64工具-不支持中文编码

```tsx

/**
 * 编码
 * @param value
 * @private
 */
Base64Util.encode('string')

/**
 * 解码
 * @param value
 * @private
 */
Base64Util.decode('string')
```

### BooleanUtil

布尔值工具

```tsx

/**
 * 切换原始布尔值
 * @param value
 */
BooleanUtil.toggleBoolean()

/**
 * 切换数字型 1真，0假
 * @param value
 */
BooleanUtil.toggleNumber()
```

### DateUtil

日期工具

```tsx
/**
 * 当前时间，转换为{@link Date}对象
 *
 * @return 当前时间
 */

DateUtil.date()

/**
 * 获得年的部分
 *
 * @param date 日期
 * @return 年的部分
 */
DateUtil.year()

/**
 * @return 今年
 */
DateUtil.thisYear()

/**
 * 是否是闰年
 */
DateUtil.isLeapYear()

/**
 * 将日期字符串转为moment类
 */
DateUtil.toMoment()
```

### IdCardUtil

身份证工具

```tsx
/**
 * 是否是正确的中国人民身份证（包括港澳台特别行政区）
 */
IdCardUtil.isValidCard()
```

### MobileUtil

手机号工具

```tsx
/**
 * 是否是一个正确的手机号
 */
MobileUtil.isMobile()

/**
 * 是否是一个正确的中国香港手机号
 */
MobileUtil.isMobileHk()

/**
 * 是否是一个正确的中国澳门手机号
 */
MobileUtil.isMobileMo()

/**
 * 是否是一个正确的中国台湾手机号
 */
MobileUtil.isMobileTw()
```

### StrUtil

字符串相关工具

```tsx
/**
 * 是否是一个空白字符
 */
isBlankChar()

/**
 * 是否是一个空值-判断字符串及其字符串的空白字符
 */
isBlankString()

/**
 * 字符串是否为非空白<br>
 * 空白符包括空格、制表符、全角空格和不间断空格<br>
 * @param str
 */
isNotBlankString()

/**
 * 比较两个字符是否相同
 *
 * @param c1         字符1
 * @param c2         字符2
 * @param ignoreCase 是否忽略大小写
 * @return 是否相同
 * @since 4.0.3
 */
isStringEquals()
```

## dom

### window

```ts
/**
 * 打开新窗口
 */
openWindow('', { target: '_blank' })
```

<table>
  <tr>
    <th>字段</th>
    <th>说明</th>
    <th>类型</th>
  </tr>
  <tr>
    <td colspan="3">API</td>
  </tr>
  <tr>
    <td>url</td>
    <td>打开的路径</td>
    <td><a>string</a></td>
  </tr>
  <tr>
    <td>opt</td>
    <td>配置想</td>
    <td><a>{ target?: '_self' | '_blank' | string; noopener?: boolean; noreferrer?: boolean }</a></td>
  </tr>
</table>

### size

#### getBoundingClientRect

```ts
/**
 * 获取元素节点大小信息
 * @param element {@type Element}
 * @return {@type DOMRect|number}
 */
getBoundingClientRect(Element)
```

### style

#### classNames

fork by ant-design-vue

拼接css class用，主要用于改写ant-design-vue组件，为业务组件使用

```ts
// fork by ant-design-vue
// 拼接css class用，主要用于改写ant-design-vue组件，为业务组件使用
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

#### createStyleObject

带样式提示的工具

```ts
// 带样式提示的工具
createStyleObject({ color: '#fff', textAlign: 'center' })
```

### scroll

#### getScroll

获取html元素滚动高度

fork by ant-design-vue

```ts
getScroll(HTMLElement, true) // ->srcollTop number
getScroll(HTMLElement, false) // ->srcollLeft number
```

#### scrollTo

带动画的纵向滚动

fork by ant-design-vue

```ts
/**
 * @param y {@type number} 滚动的距离
 * @param option
 */
scrollTo(100, {// 默认滚动距离，模式是window
  getContainer: window,
  // 滚动返回函数
  callback: () => null,
  // 滚动动画持续时间，默认450
  duration: 450
})
```

### props-util

#### initDefaultProps

fork by ant-design-vue

给vue-props赋值默认值的工具用，主要用于改写ant-design-vue组件，为业务组件使用

```ts
props: initDefaultProps({ vueprops }, { vueprops的初始值 })//->VueTypes
```

#### withInstall

简单的局部安装vue组件工具,只能安装一个组件

```ts
withInstall(组件)
```

### cipher

#### AesEncryption

aes加密工具

```ts
const aesEncryption = new AesEncryption('key', 'iv')

// 获取配置信息
aesEncryption.getOptions()
// 加密
const secretCode = aesEncryption.encryptByAES('ssss')
// 解密
aesEncryption.decryptByAES(secretCode)
```

#### encryptByBase64

base64加密

```ts
encryptByBase64('ssss')
```

#### decodeByBase64

base64解密

```ts
decodeByBase64('ssss')
```

#### encryptByMd5

MD5签名

```ts
encryptByMd5('ssss')
```
### UUID

```ts
/**
 * 构建UUID
 */
buildUUID()
/**
 * 构建短UUID
 * @param prefix 前缀
 */
buildShortUUID('-')
```
