const toString = Object.prototype.toString

function invert(object) {
  if (object == null) {
    return object
  }

  let result = {}
  Object.keys(object).forEach((key) => {
    let value = object[key]
    if (value != null && typeof value.toString !== 'function') {
      value = toString.call(value)
    }
    result[value] = key
  })

  return result
}

export default invert
