/**
 *
 * @param n n次之前都会被执行
 * @param func
 */
function before(n, func) {
  let result
  if (typeof func !== 'function') {
    throw new TypeError('Expect a function')
  }
  return function (...args) {
    if (--n > 0) {
      result = func.apply(this, args)
    }
    if (n <= 0) {
      func = undefined
    }
    return result
  }
}

export default before
