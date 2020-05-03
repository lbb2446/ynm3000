/**
 * 判断对象内的值是否都符合某个规则吗？
 * @param object
 * @param iteratee
 * @param keysFunc
 */
function baseFor(object, iteratee, keysFunc) {
  const iterable = Object(object)
  const props = keysFunc(object)
  let { length } = props
  let index = -1
  while (++index < length) {
    const key = props[index]
    if (iteratee(iterable[key], key, iterable) === false) {
      break
    }
  }
  return object
}

export default baseFor
