const toString = Object.prototype.toString

/**
 * Check that if `value` is a pure object, not these types:
 * array, function, date, regexe, `new Number()`, `new String()`
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a pure object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => false
 *
 * isObject(Function)
 * // => false
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
  const tag = toString.call(value)
  return tag === '[object Object]'
}

export default isObject