import filter from './filter'
import filterObject from './filterObject'
import negate from './negate'

/**
 * filter的反函数，无法理解，filter的函数取反也行，为啥要特地写这么一个
 * @param collection
 * @param predicate
 */
function reject(collection, predicate) {
  const func = Array.isArray(collection) ? filter : filterObject
  return func(collection, negate(predicate))
}

export default reject
