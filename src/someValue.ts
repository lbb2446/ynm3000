function someValue(object, predicate) {
  object = Object(object)
  const props = Object.keys(object)
  for (const key of props) {
    if (predicate(object[key], key, object)) {
      return true
    }
  }
  return false
}
export default someValue
