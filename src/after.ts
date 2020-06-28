/**
 * n次之后都会被执行
 * @param n
 * @param func
 */
function after(n, func) {
  if (typeof func !== 'function') {
    throw new TypeError('Excepted function')
  }
  n = n || 0
  return function (...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

export default after
