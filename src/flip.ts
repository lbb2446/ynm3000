function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected function')
  }
  return function (...args) {
    return func.apply(this, args.reverse())
  }
}

export default flip
