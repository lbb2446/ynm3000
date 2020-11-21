function baseFindKey(collection, predicate, eachFunc) {
  let result
  eachFunc(collection, (value, key, collection) => {
    if (predicate(value, key, collection)) {
      result = key
      return false
    }
  })
  return result
}

export default baseFindKey
