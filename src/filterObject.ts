function filterObject(object, predicate) {
  object = Object(object)

  let result = []
  Object.keys(object).forEach((key) => {
    if (predicate(object[key], key, object)) {
      result.push(object[key])
    }
  })

  return result
}

export default filterObject
