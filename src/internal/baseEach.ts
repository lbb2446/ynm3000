import isArrayLike from '../isArrayLike'
import baseForOwn from './baseForOwn'

/**
 * forEach,但是如果回调函数有返回false，可以提前截断数组的循环，且会返回数组
 * @param {Array|Object} collection
 * @param iteratee
 */
function baseEach(collection, iteratee) {
  if (collection == null) {
    return collection
  }
  if (!isArrayLike(collection)) {
    return baseForOwn(collection, iteratee)
  }
  const length = collection.length
  const iterable = Object(collection)
  let index = -1
  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break
    }
  }
  return collection
}

export default baseEach
