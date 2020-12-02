function forOwn(object, iteratee) {
  object = Object(object)
  Object.keys(object).forEach((key) => iteratee(object[key], key, object))
}

export default forOwn
