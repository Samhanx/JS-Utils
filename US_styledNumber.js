// 12345 => 12,345  123456 => 123,456
export function usStyledNumber(number) {
  let numStr = '0'
  number = parseInt(number)
  if (number && Number.toLocaleString) {
    numStr = number.toLocaleString()
  } else if (number) {
    numStr = number.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
  }
  return numStr
}
