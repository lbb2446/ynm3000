import reduce from './reduce'
import baseAssignValue from './internal/baseAssignValue'

function keyBy(collection, iteratee) {
  return reduce(
    collection,
    (result, value, key) => (
      baseAssignValue(result, iteratee(value), value), result
    ),
    {}
  )
}

export default keyBy
