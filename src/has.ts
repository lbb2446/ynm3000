function has(object, key) {
  return object !== null && Object.prototype.hasOwnProperty.call(object, key)
}

export default has
