import { date, parseDateString } from './extra'
/**
 * 一个用于处理💩山时，项目过多log的突发奇想
 * 试验性质，不保证可用
 */
export class GroupLog {
  public prod = false

  constructor(name: string, author?: string, prod?: boolean) {
    this.create(name, author)
    this.setProd(prod)
  }

  public setProd(prod?: boolean) {
    this.prod = prod || false
    return this
  }

  public get console() {
    if (!this.prod) {
      return console
    }
    return null
  }

  public clear() {
    this.console?.clear()
    return this
  }

  public create(name: string, author?: string) {
    const dateTime = parseDateString(date(), 'YYYY-MM-DD hh:mm:ss')
    const groupName = `${name} ${author || 'WhiteKite'} ${dateTime}`
    this.console?.group(groupName)
    return this
  }

  public dispose() {
    this.console?.groupEnd()
  }

  public log(...args: any[]) {
    this.console?.log(args)
    return this
  }

  public warn(...args: any[]) {
    this.console?.warn(args)
    return this
  }

  public error(...args: any[]) {
    this.console?.error(args)
    return this
  }

  public count(label?: string) {
    this.console?.count(label)
    return this
  }

  public countReset(label?: string) {
    this.console?.countReset(label)
    return this
  }

  public info(...args: any[]) {
    this.console?.info(args)
    return this
  }

  public table(tabularData?: any, properties?: string[]) {
    this.console?.table(tabularData, properties)
    return this
  }

  public time(label?: string) {
    this.console?.time(label)
    return this
  }

  public timeEnd(label?: string) {
    this.console?.timeEnd(label)
    return this
  }

  public static start(name: string, author?: string, prop?: boolean) {
    return new GroupLog(name, author, prop)
  }
}