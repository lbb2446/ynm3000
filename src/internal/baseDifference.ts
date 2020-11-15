import arrayIncludes from './arrayIncludes'
import map from '../map'
import arrayIncludesWith from './arrayIncludesWith'
import cacheHas from './cacheHas'
import SetCache from './SetCache'

const LARGE_ARRAY_SIZE = 200

/**
 *
 * 找不同
 * @param {*} array
 * @param {*} values
 * @param {*} [iteratee] 对每组每个数据的处理方法
 * @param {*} [comparator] 找不同的方法
 * @returns
 */
function baseDifference(array, values, iteratee?, comparator?) {
  let includes: any = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length
  if (!array.length) {
    return result
  }

  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }
  if (comparator) {
    includes = arrayIncludesWith
    isCommon = false
  } else if (valuesLength >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }

  outer: for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value)
    value = comparator || value !== 0 ? value : 0
    if (isCommon && computed === computed) {
      let valueIndex = valuesLength
      while (valueIndex--) {
        if (values[valueIndex] === computed) {
          continue outer
        }
      }
      result.push(value)
    } else if (!includes(values, computed, comparator)) {
      result.push(value)
    }
  }

  return result
}

export default baseDifference
