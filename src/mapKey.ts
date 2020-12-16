function mapKey(object, iteratee) {
  object = Object(object)

  let result = {}
  Object.keys(object).forEach((key) => {
    const value = object[key]
    result[iteratee(value, key, object)] = value
  })
  return result
}

export default mapKey
