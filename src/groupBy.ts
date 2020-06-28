import reduce from './reduce'
import baseAssignValue from './internal/baseAssignValue'

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 根据传入规则分类
 * @param collection
 * @param iteratee
 */
function groupBy(collection, iteratee) {
  return reduce(
    collection,
    // (acc, item) => {
    //   if (!acc[iteratee(item)]) {
    //     acc[iteratee(item)] = []
    //   }
    //   acc[iteratee(item)].push(item)
    // },
    (result, value, key) => {
      key = iteratee(value)
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value)
      } else {
        baseAssignValue(result, key, [value])
      }
      return result
    },
    {}
  )
}

export default groupBy
