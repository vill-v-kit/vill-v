import { isNil } from '@vill-v/type-as'

export const toLower = (value: string) => {
  if (isNil(value)) {
    return ''
  }
  return value.toLowerCase()
}
