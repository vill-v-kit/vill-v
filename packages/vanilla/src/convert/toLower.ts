import { isNil } from '../is'

export const toLower = (value: string) => {
  if (isNil(value)) {
    return ''
  }
  return value.toLowerCase()
}
