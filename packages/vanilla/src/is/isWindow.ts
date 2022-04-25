import { isNil } from './isNil'

export const isWindow = (value: any): value is Window => !isNil(value) && value === value.window
