import { isMatchRegex, NUMBERS_PATTERN } from '@vill-v/regexp-match'
import {
  hideStringWithStartAndEnd,
  isBlankString,
  isStringEquals,
  isEmpty,
  toArray,
} from '@vill-v/vanilla'

import { isBirthday, age, parseDate, parseDateString, toDayJs, year } from '@vill-v/date'

/**
 * 构建城市码
 */
const createCityCodes = () => {
  const CITY_CODES = new Map<string, string>()
  CITY_CODES.set('11', '北京')
  CITY_CODES.set('12', '天津')
  CITY_CODES.set('13', '河北')
  CITY_CODES.set('14', '山西')
  CITY_CODES.set('15', '内蒙古')
  CITY_CODES.set('21', '辽宁')
  CITY_CODES.set('22', '吉林')
  CITY_CODES.set('23', '黑龙江')
  CITY_CODES.set('31', '上海')
  CITY_CODES.set('32', '江苏')
  CITY_CODES.set('33', '浙江')
  CITY_CODES.set('34', '安徽')
  CITY_CODES.set('35', '福建')
  CITY_CODES.set('36', '江西')
  CITY_CODES.set('37', '山东')
  CITY_CODES.set('41', '河南')
  CITY_CODES.set('42', '湖北')
  CITY_CODES.set('43', '湖南')
  CITY_CODES.set('44', '广东')
  CITY_CODES.set('45', '广西')
  CITY_CODES.set('46', '海南')
  CITY_CODES.set('50', '重庆')
  CITY_CODES.set('51', '四川')
  CITY_CODES.set('52', '贵州')
  CITY_CODES.set('53', '云南')
  CITY_CODES.set('54', '西藏')
  CITY_CODES.set('61', '陕西')
  CITY_CODES.set('62', '甘肃')
  CITY_CODES.set('63', '青海')
  CITY_CODES.set('64', '宁夏')
  CITY_CODES.set('65', '新疆')
  CITY_CODES.set('71', '台湾')
  CITY_CODES.set('81', '香港')
  CITY_CODES.set('82', '澳门')
  CITY_CODES.set('83', '台湾')
  CITY_CODES.set('91', '国外')
  return CITY_CODES
}
/**
 * 构建中国台湾身份证第一位
 */
const createTwFirstCode = () => {
  const TW_FIRST_CODE = new Map<string, number>()
  TW_FIRST_CODE.set('A', 10)
  TW_FIRST_CODE.set('B', 11)
  TW_FIRST_CODE.set('C', 12)
  TW_FIRST_CODE.set('D', 13)
  TW_FIRST_CODE.set('E', 14)
  TW_FIRST_CODE.set('F', 15)
  TW_FIRST_CODE.set('G', 16)
  TW_FIRST_CODE.set('H', 17)
  TW_FIRST_CODE.set('J', 18)
  TW_FIRST_CODE.set('K', 19)
  TW_FIRST_CODE.set('L', 20)
  TW_FIRST_CODE.set('M', 21)
  TW_FIRST_CODE.set('N', 22)
  TW_FIRST_CODE.set('P', 23)
  TW_FIRST_CODE.set('Q', 24)
  TW_FIRST_CODE.set('R', 25)
  TW_FIRST_CODE.set('S', 26)
  TW_FIRST_CODE.set('T', 27)
  TW_FIRST_CODE.set('U', 28)
  TW_FIRST_CODE.set('V', 29)
  TW_FIRST_CODE.set('X', 30)
  TW_FIRST_CODE.set('Y', 31)
  TW_FIRST_CODE.set('W', 32)
  TW_FIRST_CODE.set('Z', 33)
  TW_FIRST_CODE.set('I', 34)
  TW_FIRST_CODE.set('O', 35)
  return TW_FIRST_CODE
}
/**
 * 中国公民身份证号码最小长度
 */
const CHINA_ID_MIN_LENGTH = 15
/**
 * 中国公民身份证号码最大长度
 */
const CHINA_ID_MAX_LENGTH = 18
/**
 * 每位加权因子
 */
const POWER = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
/**
 * 省市代码表
 */
const CITY_CODES = createCityCodes()
/**
 * 台湾身份首字母对应数字
 */
const TW_FIRST_CODE = createTwFirstCode()

/**
 * 身份证工具
 */
export default class IdCardUtil {
  /**
   * 将15位身份证号码转换为18位
   *
   * @param idCard 15位身份编码
   * @return 18位身份编码
   */
  private static convert15To18(idCard: string) {
    let idCard18: string
    if (idCard.length !== CHINA_ID_MIN_LENGTH) {
      return null
    }
    if (isMatchRegex(NUMBERS_PATTERN, idCard)) {
      // 获取出生年月日
      const birthday = idCard.substring(6, 12)
      const birthDate = parseDate(birthday, 'YYMMdd')
      // 获取出生年(完全表现形式,如：2010)
      let sYear = year(birthDate)
      if (sYear > 2000) {
        // 2000年之后不存在15位身份证号，此处用于修复此问题的判断
        sYear -= 100
      }
      idCard18 = `${idCard.substring(0, 6)}${sYear}${idCard.substring(8)}`
      // 获取校验位
      const sVal = this.getCheckCode18(idCard18)
      idCard18 += sVal
    } else {
      return null
    }
    return idCard18
  }

  /**
   * 是否有效身份证号，忽略X的大小写
   *
   * @param idCard 身份证号，支持18位、15位和港澳台的10位
   * @return 是否有效
   */
  public static isValidCard(idCard: string): boolean {
    if (isBlankString(idCard)) {
      return false
    }

    idCard = idCard.trim()
    const length = idCard.length
    switch (length) {
      case 18: // 18位身份证
        return this.isValidCard18(idCard, true)
      case 15: // 15位身份证
        return this.isValidCard15(idCard)
      case 10:
        // 10位身份证，港澳台地区
        return this.isValidCard10(idCard)
      default:
        return false
    }
  }

  /**
   * 将身份证的每位和对应位的加权因子相乘之后，再得到和值
   *
   * @param iArr 身份证号码的数组
   * @return 身份证编码
   */
  private static getPowerSum(iArr: string[]): number {
    let iSum = 0
    if (POWER.length === iArr.length) {
      for (let i = 0; i < iArr.length; i++) {
        iSum += parseInt(String(iArr[i])) * POWER[i]
      }
    }
    return iSum
  }

  /**
   * 将power和值与11取模获得余数进行校验码判断
   * @param iSum
   */
  private static getCheckCode18WithISum(iSum: number): string {
    switch (iSum % 11) {
      case 10:
        return '2'
      case 9:
        return '3'
      case 8:
        return '4'
      case 7:
        return '5'
      case 6:
        return '6'
      case 5:
        return '7'
      case 4:
        return '8'
      case 3:
        return '9'
      case 2:
        return 'X'
      case 1:
        return '0'
      case 0:
        return '1'
      default:
        return ' '
    }
  }

  /**
   * 获得18位身份证校验码
   *
   * @param code17 18位身份证号中的前17位
   * @return 第18位
   */
  private static getCheckCode18(code17: string): string {
    const sum = this.getPowerSum(toArray(code17) as string[])
    return this.getCheckCode18WithISum(sum)
  }

  /**
   * 验证18位身份编码是否合法
   *
   * @return 是否合法
   * @param idCard
   * @param ignoreCase
   */
  private static isValidCard18(idCard: string, ignoreCase: boolean): boolean {
    if (CHINA_ID_MAX_LENGTH !== idCard.length) {
      return false
    }
    // 省份
    const proCode = idCard.substring(0, 2)
    if (!CITY_CODES.get(proCode)) {
      return false
    }
    //校验生日
    if (!isBirthday(idCard.substring(6, 14))) {
      return false
    }
    // 前17位
    const code17 = idCard.substring(0, 17)
    if (isMatchRegex(NUMBERS_PATTERN, code17)) {
      // 获取校验位
      const val = this.getCheckCode18(code17)
      // 第18位
      return isStringEquals(val, idCard.charAt(17), ignoreCase)
    }

    return false
  }

  /**
   * 验证15位身份编码是否合法
   *
   * @return 是否合法
   * @param idCard
   */
  private static isValidCard15(idCard: string): boolean {
    if (CHINA_ID_MIN_LENGTH !== idCard.length) {
      return false
    }
    if (isMatchRegex(NUMBERS_PATTERN, idCard)) {
      // 省份
      const proCode = idCard.substring(0, 2)
      if (!CITY_CODES.get(proCode)) {
        return false
      }

      //校验生日（两位年份，补充为19XX）
      return isBirthday('19' + idCard.substring(6, 12))
    } else {
      return false
    }
  }

  /**
   * 验证10位身份编码是否合法
   *
   * @param idCard
   */
  private static isValidCard10(idCard: string): boolean {
    if (isBlankString(idCard)) {
      return false
    }
    if (idCard.length !== 10) {
      return false
    }
    // 台湾
    if (RegExp('^[a-zA-Z][0-9]{9}$').test(idCard)) {
      return this.isValidTWCard(idCard)
    }
    // 澳门
    if (RegExp('^[157][0-9]{6}\\(?[0-9A-Z]\\)?$').test(idCard)) {
      return true
    }
    // 香港
    return RegExp('^[A-Z]{1,2}[0-9]{6}\\(?[0-9A]\\)?$').test(idCard)
  }

  /**
   * 验证中国台湾身份证号码
   *
   * @return 验证码是否符合
   * @param idCard
   */
  private static isValidTWCard(idCard: string): boolean {
    if (isEmpty(idCard)) {
      return false
    }
    const start = idCard.substring(0, 1)
    const iStart = TW_FIRST_CODE.get(start)
    if (!iStart) {
      return false
    }
    const mid = idCard.substring(1, 9)
    const end = idCard.substring(9, 10)
    let sum = iStart / 10 + (iStart % 10) * 9
    const chars = toArray(mid)
    let iflag = 8
    for (const c of chars) {
      sum += parseInt(String(c)) * iflag
      iflag--
    }
    return (sum % 10 === 0 ? 0 : 10 - (sum % 10)) === parseInt(end)
  }

  /**
   * 根据身份编号获取生日，只支持15或18位身份证号码
   *
   * @return 生日(yyyyMMdd)
   * @param idCard
   */
  public static getBirthByIdCard(idCard: string): string {
    return this.getBirth(idCard)
  }

  /**
   * 根据身份编号获取生日，只支持15或18位身份证号码
   *
   * @param idCard 身份编号
   * @return 生日(yyyyMMdd)
   */
  public static getBirth(idCard: string): string {
    if (isBlankString(idCard)) {
      return ''
    }
    const len = idCard.length
    if (len < CHINA_ID_MIN_LENGTH) {
      return ''
    } else if (len === CHINA_ID_MIN_LENGTH) {
      idCard = this.convert15To18(idCard) || ''
    }
    return idCard.substring(6, 14)
  }

  /**
   * 从身份证号码中获取生日日期，只支持15或18位身份证号码
   *
   * @param idCard 身份证号码
   * @return 日期
   */
  public static getBirthDate(idCard: string): Date | null {
    const birthByIdCard = this.getBirthByIdCard(idCard)
    return !birthByIdCard ? null : parseDate(birthByIdCard, 'YYYYMMDD')
  }

  /**
   * 根据身份编号获取年龄，只支持15或18位身份证号码
   *
   * @return 年龄
   * @param idCard
   */
  public static getAgeByIdCard(idCard: string): number | null {
    const birth = this.getBirthByIdCard(idCard)
    if (!birth) {
      return null
    }
    return age(toDayJs(birth, 'YYYYMMDD'))
  }

  /**
   * 根据身份编号获取生日年，只支持15或18位身份证号码
   *
   * @return 生日(yyyy)
   * @param idCard
   */
  public static getYearByIdCard(idCard: string) {
    const len = idCard.length
    if (len < CHINA_ID_MIN_LENGTH) {
      return null
    } else if (len === CHINA_ID_MIN_LENGTH) {
      idCard = this.convert15To18(idCard) || ''
    }
    return idCard.substring(6, 10)
  }

  /**
   * 根据身份编号获取生日月，只支持15或18位身份证号码
   *
   * @return 生日(MM)
   * @param idCard
   */
  public static getMonthByIdCard(idCard: string) {
    const len = idCard.length
    if (len < CHINA_ID_MIN_LENGTH) {
      return null
    } else if (len === CHINA_ID_MIN_LENGTH) {
      idCard = this.convert15To18(idCard) || ''
    }
    return idCard.substring(10, 12)
  }

  /**
   * 根据身份编号获取生日天，只支持15或18位身份证号码
   *
   * @return 生日(dd)
   * @param idCard
   */
  public static getDayByIdCard(idCard: string): string | null {
    const len = idCard.length
    if (len < CHINA_ID_MIN_LENGTH) {
      return null
    } else if (len === CHINA_ID_MIN_LENGTH) {
      idCard = this.convert15To18(idCard) || ''
    }
    return idCard.substring(12, 14)
  }

  /**
   * 根据身份编号获取性别，只支持15或18位身份证号码
   *
   * @return 性别(1 : 男 ， 0 : 女)
   * @param idCard
   */
  public static getGenderByIdCard(idCard: string): number | null {
    if (isBlankString(idCard)) {
      return null
    }
    const len = idCard.length
    if (len < CHINA_ID_MIN_LENGTH) {
      return null
    }

    if (len === CHINA_ID_MIN_LENGTH) {
      idCard = this.convert15To18(idCard) || ''
    }
    const sCardChar = Number(idCard.charAt(16))
    return sCardChar % 2 !== 0 ? 1 : 0
  }

  /**
   * 根据身份编号获取户籍省份，只支持15或18位身份证号码
   *
   * @return 省份名称。
   * @param idCard
   */
  public static getProvinceByIdCard(idCard: string) {
    const len = idCard.length
    if (len === CHINA_ID_MIN_LENGTH || len === CHINA_ID_MAX_LENGTH) {
      const sProvinNum = idCard.substring(0, 2)
      return CITY_CODES.get(sProvinNum)
    }
    return null
  }

  /**
   * 根据身份编号获取市级编码，只支持15或18位身份证号码
   *
   * @return 市级编码。
   * @param idCard
   */
  public static getCityCodeByIdCard(idCard: string) {
    const len = idCard.length
    if (len === CHINA_ID_MIN_LENGTH || len === CHINA_ID_MAX_LENGTH) {
      return idCard.substring(0, 5)
    }
    return null
  }

  /**
   * 隐藏指定位置的几个身份证号数字为“*”
   *
   * @param idCard
   * @param startInclude 开始位置（包含）
   * @param endExclude   结束位置（不包含）
   * @return 隐藏后的身份证号码
   */
  public static hide(idCard: string, startInclude: number, endExclude: number) {
    return hideStringWithStartAndEnd(idCard, startInclude, endExclude, '*')
  }

  /**
   * 获取身份证信息，包括身份、城市代码、生日、性别等
   *
   * @param idCard
   */
  public static getIdCardInfo(idCard) {
    return new IdCard(idCard)
  }
}

export class IdCard {
  get birthDateString(): string | null | undefined {
    const birthDate = this.birthDate
    return !birthDate ? null : parseDateString(this.birthDate, 'YYYYMMDD')
  }

  get age(): number | undefined | null {
    return this._age
  }

  set age(value: number | undefined | null) {
    this._age = value
  }

  get genderString(): string | null | undefined {
    if (this._gender === 1) {
      return '男'
    }
    if (this._gender === 0) {
      return '女'
    }
    return null
  }

  get gender(): number | null | undefined {
    return this._gender
  }

  set gender(value: number | null | undefined) {
    this._gender = value
  }

  get birthDate(): Date | null | undefined {
    return this._birthDate
  }

  set birthDate(value: Date | null | undefined) {
    this._birthDate = value
  }

  get cityCode(): string | null | undefined {
    return this._cityCode
  }

  set cityCode(value: string | null | undefined) {
    this._cityCode = value
  }

  get provinceCode(): string | null | undefined {
    return this._provinceCode
  }

  set provinceCode(value: string | null | undefined) {
    this._provinceCode = value
  }

  private _provinceCode: string | null | undefined
  private _cityCode: string | null | undefined
  private _birthDate: Date | null | undefined
  private _gender: number | null | undefined
  private _age: number | undefined | null

  constructor(idCard: string) {
    this.provinceCode = IdCardUtil.getProvinceByIdCard(idCard)
    this.cityCode = IdCardUtil.getCityCodeByIdCard(idCard)
    this.birthDate = IdCardUtil.getBirthDate(idCard)
    this.gender = IdCardUtil.getGenderByIdCard(idCard)
    this.age = IdCardUtil.getAgeByIdCard(idCard)
  }
}
