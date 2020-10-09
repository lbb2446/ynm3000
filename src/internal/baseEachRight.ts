import isArrayLike from '../isArrayLike'
import baseForOwnRight from './baseForOwnRight'

function baseEachRight(collection, iteratee) {
  if (collection == null) {
    return collection
  }
  if (!isArrayLike(collection)) {
    return baseForOwnRight(collection, iteratee)
  }
  const iterable = Object(collection)
  let length = collection.length
  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break
    }
  }

  return collection
}

export default baseEachRight
