/**
 * @description 判读是否为外链
 * @param value
 * @returns {boolean}
 */
export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
/**
 * @description 将秒数转换为分秒
 * @param seconds
 * @returns string
 */
export const formatSeconds = (seconds: number) => {
  const min = Math.floor(seconds / 60)
  const second = Math.floor(seconds % 60)
  return `${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
}
