/**
 * 延迟
 * @param time
 */
export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
