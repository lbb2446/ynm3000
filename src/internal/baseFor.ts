//TODO:这个函数什么用处？
function baseFor(object, iteratee, keysFunc) {
  const iterable = Object(object)
  const props = keysFunc(object)
  let { length } = props
  let index = -1
  while (++index < length) {
    const key = props[index]
    if (!iteratee(iterable[key], key, iterable)) {
      break
    }
  }
  return object
}

export default baseFor
