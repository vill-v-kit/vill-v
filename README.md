# whitekite-utils

白鸢个人工具包

[![star](https://gitee.com/white-kite/seele-utils/badge/star.svg?theme=dark)](https://gitee.com/white-kite/seele-utils/stargazers) [![fork](https://gitee.com/white-kite/seele-utils/badge/fork.svg?theme=dark)](https://gitee.com/white-kite/seele-utils/members)

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
toggleBoolean(true) // => false

/**
 * 切换数字型
 * 默认1真，0假
 * @param value
 * @param correct 真值
 * @param error 假值
 */
toggleNumber(1) // =>0
toggleNumber(1, 0, 1) // =>0
toggleNumber(3, 2, 3) // =>2
toggleNumber(2, 2, 3) // =>3

/**
 * 切换文字型
 * @param value
 * @param correct
 * @param error
 */
toggleText('假假') // => 真
toggleText('假假', '真', '假') // => 真
toggleText('假假', '真真', '假') // => 真

/**
 * 统一切换，上面的集合
 * 单必须确认传入的是string，number，boolean的一种
 * @param value
 * @param correct
 * @param error
 */
toggle(true) //=>false
toggle(1) // => 0
toggle('假假') // => 真
toggle(null) // => throw error
```

### DateUtil

日期工具

```tsx
/**
 * 当前时间，转换为{@link Date}对象
 *
 * @return 当前时间
 */
date()

/**
 * 获得年的部分
 *
 * @param date 日期
 * @return 年的部分
 */
year()

/**
 * @return 今年
 */
thisYear()

/**
 * 是否是闰年
 */
isLeapYear()

/**
 * 将日期字符串转为moment类
 */
toMoment(new Date(), 'YYYYMMDD')

/**
 * 计算年龄
 * @param birthday
 * @param dateToCompare
 */
age(toMoment('19990601', 'YYYYMMDD'), moment())

/**
 * 格式化时间字符串
 * @param value
 * @param format
 */
parseDateString(new Date(), 'YYYYMMDD') //=>string

/**
 * 格式化时间
 * @param value
 * @param format
 */
parseDate(new Date(), 'YYYYMMDD') //=>moment.Moment
```

### IdCardUtil

身份证工具

```tsx
/**
 * 是否是正确的中国人民身份证（包括港澳台特别行政区）
 */
IdCardUtil.isValidCard()

/**
 * 根据身份编号获取生日，只支持15或18位身份证号码
 *
 * @return 生日(yyyyMMdd)
 * @param idCard
 */
IdCardUtil.getBirthByIdCard("idCard") //=> string 

/**
 * 从身份证号码中获取生日日期，只支持15或18位身份证号码
 *
 * @param idCard 身份证号码
 * @return 日期
 */
IdCardUtil.getBirthDate("idCard")//=> Date | null 

/**
 * 根据身份编号获取年龄，只支持15或18位身份证号码
 *
 * @return 年龄
 * @param idCard
 */
IdCardUtil.getAgeByIdCard("idCard") //=>number

/**
 * 根据身份编号获取生日年，只支持15或18位身份证号码
 *
 * @return 生日(yyyy)
 * @param idCard
 */
IdCardUtil.getYearByIdCard("idCard") //=>string

/**
 * 根据身份编号获取生日月，只支持15或18位身份证号码
 *
 * @return 生日(MM)
 * @param idCard
 */
IdCardUtil.getMonthByIdCard("idCard") //=>string

/**
 * 根据身份编号获取生日天，只支持15或18位身份证号码
 *
 * @return 生日(dd)
 * @param idCard
 */
IdCardUtil.getDayByIdCard("idCard")//=> string | null

/**
 * 根据身份编号获取性别，只支持15或18位身份证号码
 *
 * @return 性别(1 : 男 ， 0 : 女)
 * @param idCard
 */
IdCardUtil.getGenderByIdCard("idCard") // =>number | null

/**
 * 根据身份编号获取户籍省份，只支持15或18位身份证号码
 *
 * @return 省份名称。
 * @param idCard
 */
IdCardUtil.getProvinceByIdCard("idCard") //=>string|null

/**
 * 根据身份编号获取市级编码，只支持15或18位身份证号码
 *
 * @return 市级编码。
 * @param idCard
 */
IdCardUtil.getCityCodeByIdCard("idCard") //=>number

/**
 * 隐藏指定位置的几个身份证号数字为“*”
 *
 * @param idCard
 * @param startInclude 开始位置（包含）
 * @param endExclude   结束位置（不包含）
 * @return 隐藏后的身份证号码
 */
IdCardUtil.hide("idCard", 1, 2) //=>**213123121212124712

/**
 * 获取身份证信息，包括身份、城市代码、生日、性别等
 *
 * @param idCard
 */
IdCardUtil.getIdCardInfo("idCard") //=> class IdCard

const idcard = new IdCard("idCard")
idcard.age //=>年龄
idcard.birthDate // =>生日 返回 Date格式
idcard.birthDateString // =>生日 返回 string格式
idcard.gender // 性别 =>number 1 男 0女
idcard.genderString // 性别 =>string 男 女
idcard.cityCode // 市级编码
idcard.provinceCode // 户籍省份
```

### MobileUtil

手机号工具

```tsx
/**
 * 是否是一个正确的手机号
 */
isMobile()

/**
 * 是否是一个正确的中国香港手机号
 */
isMobileHk()

/**
 * 是否是一个正确的中国澳门手机号
 */
isMobileMo()

/**
 * 是否是一个正确的中国台湾手机号
 */
isMobileTw()
```

### BirthdayUtil

生日相关工具

```tsx
/**
 * 验证是否为生日
 *
 * @param year  年，从1900年开始计算
 * @param month 月，从1开始计数
 * @param day   日，从1开始计数
 * @return 是否为生日
 */
isBirthdayByDate(1999, 6, 1)

/**
 * 验证是否为生日<br>
 * 只支持以下几种格式：
 * <ul>
 * <li>yyyyMMdd</li>
 * <li>yyyy-MM-dd</li>
 * <li>yyyy/MM/dd</li>
 * <li>yyyy.MM.dd</li>
 * <li>yyyy年MM月dd日</li>
 * </ul>
 *
 * @param value 值
 * @return 是否为生日
 */
isBirthday('1999-06-01')
```

### CharSetUtil

字符集工具

```tsx

/**
 * 文本转二进制数组
 * 仅支持UTF-8
 * @param value
 */
textEncode('事实上') // => Uint8Array()

/**
 * 二进制数组转文本
 * @param value
 * @param charSet 格式化编码
 */
textDecode(new Uint8Array(), 'GB2312') // => '事实上' as string
```

### ArrayUtil

数组工具

```tsx

/**
 * 是否数组每项都符合条件
 * @param array
 * @param filter
 */
isAllItemVerified([], (item, index, array) => true) // =>true
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

/**
 * 隐藏字符串，通过开始和结束下标
 * @param str
 * @param startInclude
 * @param endExclude
 * @param replacedChar
 */
hideStringWithStartAndEnd = ('xxxxx', 0, 2, '*') // => ***xx

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

### file

#### imgDataURLtoBlob

base64文件转blob 主要用来转换base64图片

```ts
imgDataURLtoBlob('img:base64')
```

#### imgUrlToBase64

图片url转Base64

```ts
imgUrlToBase64('https://', 'image/png')
```

#### downloadImageByOnlineUrl

通过在线网址下载图片

```ts
downloadImageByOnlineUrl('https://', '下载图片的名称', 'image/png')
```

#### downloadImageByBase64

下载base64图片

```ts
 downloadImageByBase64('img:base64', '下载图片的名称', 'image/png')
```

#### downloadByData

根据后台返回的文件流下载

```ts
downloadByData({
  data: new Blob(),
  target: '_blank',
  filename: '下载文件的名称',
  mime: 'application/pdf'
})
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
    <td>data</td>
    <td>后台返回的流</td>
    <td><a>Blob</a></td>
  </tr>
  <tr>
    <td>target</td>
    <td>target</td>
    <td><a>_self | _blank</a></td>
  </tr>
  <tr>
    <td>filename</td>
    <td>下载的文件名称</td>
    <td><a>string</a></td>
  </tr>
  <tr>
    <td>mime</td>
    <td>文件类型</td>
    <td><a>image/png | image/jpg | application/pdf | string </a></td>
  </tr>
</table>

#### downloadByUrl

根据文件地址下载文件

```ts
downloadByUrl({
  url: 'https://',
  target: '_blank',
  fileName: '下载的文件名称',
})
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
    <td>data</td>
    <td>后台返回的流</td>
    <td><a>Blob</a></td>
  </tr>
  <tr>
    <td>target</td>
    <td>target</td>
    <td><a>_self | _blank</a></td>
  </tr>
  <tr>
    <td>filename</td>
    <td>下载的文件名称</td>
    <td><a>string</a></td>
  </tr>
</table>

## ENV

浏览器环境工具

```tsx
/**
 * 这个api是否可以使用
 * @param api
 */
canIUse('TextEncoder') // => true/false
```

## 推荐

<table style="text-align: center;">
  <tr>
    <td><strong>Project</strong></td>
    <td><strong>Repository</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>
      @whitekite/vue-types-extra
    </td>
    <td>
      <a href='https://gitee.com/white-kite/vue-types-extra/stargazers'>
        <img src='https://gitee.com/white-kite/vue-types-extra/badge/star.svg?theme=gray' alt='star'>
      </a>
    </td>
    <td>
      vue-types的扩展
    </td>
  </tr>
  <tr>
    <td>@whitekite/vue-helper</td>
    <td>
      <a href='https://gitee.com/white-kite/vue-helper/stargazers'>
        <img src='https://gitee.com/white-kite/vue-helper/badge/star.svg?theme=gray' alt='star'>
      </a>
    </td>
    <td>
      vue帮助包
    </td>
  </tr>
</table>
