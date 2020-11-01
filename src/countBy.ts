import reduce from './reduce'
import baseAssignValue from './internal/baseAssignValue'

function countBy(collection, iteratee) {
  return reduce(
    collection,
    (result, value, key) => {
      key = iteratee(value)
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        ++result[key]
      } else {
        baseAssignValue(result, key, 1)
      }

      return result
    },
    {}
  )
}

export default countBy
