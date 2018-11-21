const toString = Object.prototype.toString

/**
 * Check that if `value` is a pure object, not these types:
 * array, function, date, regexe, `new Number()`, `new String()`
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is a pure object, else `false`.
 * @example
 *
 * isPureObject({})
 * // => true
 *
 * isPureObject([])
 * // => false
 *
 * isPureObject(Function)
 * // => false
 *
 * isPureObject(null)
 * // => false
 */
function isPureObject(value) {
  const tag = toString.call(value)
  return tag === '[object Object]'
}

export default isPureObject