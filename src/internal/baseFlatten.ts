import isFlattenable from './isFlattenable'

/**
 * 拍平数组
 * @param array
 * @param depth
 * @param predicate
 * @param isStrict 是否严格，可通过predicate的校验
 * @param result
 */
function baseFlatten(array, depth, predicate?, isStrict?, result?) {
  predicate || (predicate = isFlattenable)
  result || (result = [])

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        result.push(...value)
      }
    } else if (!isStrict) {
      result[result.length] = value
    }
  }
  return result
}

export default baseFlatten
