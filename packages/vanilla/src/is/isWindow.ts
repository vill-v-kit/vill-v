import { isNil } from '@vill-v/type-as'

export const isWindow = (value: any): value is Window => !isNil(value) && value === value.window
