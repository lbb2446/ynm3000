function toPlainObject(value) {
  value = Object(value)
  const result = {}
  for (const key in value) {
    result[key] = value[key]
  }
  return result
}

export default toPlainObject
