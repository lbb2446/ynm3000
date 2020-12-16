function mapValue(object, iteratee) {
  object = Object(object)
  let result = {}
  Object.keys(object).forEach((key) => {
    result[key] = iteratee(object[key], key, object)
  })
  return result
}

export default mapValue
