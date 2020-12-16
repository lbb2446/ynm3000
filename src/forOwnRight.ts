function forOwnRight(object, iteratee) {
  if (object == null) {
    return
  }
  const props = Object.keys(object)
  let length = props.length
  while (length--) {
    const key = props[length]
    iteratee(object[key], key, object)
  }
}

export default forOwnRight
