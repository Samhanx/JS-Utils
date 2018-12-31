/**
 * Return an U.S. styled int number
 * @param {number} number - The number to format.
 * @return {string}
 * @example
 *
 * usStyledInt(12345)
 * // => '12,345'
 *
 * usStyledInt(123456)
 * // => '123,456'
 */
export function usStyledInt(number) {
  let numStr = '0'
  number = parseInt(number)
  if (number && Number.toLocaleString) {
    numStr = number.toLocaleString()
  } else if (number) {
    numStr = number.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
  }
  return numStr
}
