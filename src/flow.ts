function flow(...funcs) {
  const length = funcs.length
  let index = -1
  while (++index < length) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected function')
    }
  }

  return function (...args) {
    let index = 0

    let result = length ? funcs[index].apply(this, args) : args[0]
    while (++index < length) {
      result = funcs[index].call(this, result)
    }
    return result
  }
}

export default flow
