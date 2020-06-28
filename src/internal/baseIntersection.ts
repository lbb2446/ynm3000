import arrayIncludesWith from './arrayIncludesWith'
import arrayIncludes from './arrayIncludes'
import map from '../map'
import SetCache from './SetCache'
import cacheHas from './cacheHas'

/**
 * 取交集
 * @param arrays
 * @param iteratee
 * @param comparator
 */
function baseIntersection(arrays, iteratee?, comparator?) {
  const includes = comparator ? arrayIncludesWith : arrayIncludes
  const length = arrays[0].length
  const othLength = arrays.length
  let caches = new Array(othLength)
  let result = []

  let array
  let maxLength = Infinity
  let othIndex = othLength

  while (--othIndex) {
    array = arrays[othIndex]
    if (othIndex && iteratee) {
      array = map(array, iteratee)
    }
    //找到所有数组中最小数组的长度
    maxLength = Math.min(array.length, maxLength)
    caches[othIndex] =
      !comparator && (iteratee || (length >= 120 && array.length >= 120))
        ? new SetCache(othIndex && array)
        : undefined
  }
  array = arrays[0]

  let index = -1
  const seen = caches[0]

  //TODO:怎么比较出来的，待理解
  outer: while (++index < length && result.length < maxLength) {
    let value = array[index]
    const computed = iteratee ? iteratee(value) : value
    value = comparator || value !== 0 ? value : 0
    if (
      !(seen
        ? cacheHas(seen, computed)
        : includes(result, computed, comparator))
    ) {
      othIndex = othLength
      while (--othIndex) {
        const cache = caches[othIndex]
        if (
          !(cache
            ? cacheHas(cache, computed)
            : includes(arrays[othIndex], computed, comparator))
        ) {
          continue outer
        }
      }
      if (seen) {
        seen.push(computed)
      }
      result.push(value)
    }
  }

  return result
}

export default baseIntersection
