function mapObject(object, iteratee) {
  const props = Object.keys(object)
  let result = new Array(props.length)

  props.forEach((key, index) => {
    result[index] = iteratee(object[key], key, object)
  })
  return result
}

export default mapObject
