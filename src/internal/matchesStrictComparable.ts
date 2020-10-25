function matchesStrictComparable(key, srcValue) {
  return (object) => {
    if (object == null) {
      return false
    }
    return (
      object[key] === srcValue && (srcValue !== undefined || key in Object(object))
    )
  }
}

export default matchesStrictComparable
