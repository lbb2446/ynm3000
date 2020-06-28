const hasOwnProperty = Object.prototype.hasOwnProperty

function invertBy(object, iteratee) {
  if (object == null) {
    return object
  }

  let result = {}
  Object.keys(object).forEach((key) => {
    const value = iteratee(object[key])
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key)
    } else {
      result[value] = [key]
    }
  })

  return result
}

export default invertBy
