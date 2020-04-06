function keysIn(object) {
  let result = []
  for (const key in object) {
    result.push(key)
  }
  return result
}

export default keysIn
