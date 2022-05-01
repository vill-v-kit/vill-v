import { Fn } from '@vill-v/ts'

export const isFunction = (value: any): value is Fn => typeof value === 'function'
