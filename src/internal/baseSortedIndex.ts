import baseSortedIndexBy from './baseSortedIndexBy'
import isSymbol from '../isSymbol'

const MAX_ARRAY_LENGTH = 4294967295
const HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1

/**
 *
 * @param array
 * @param value
 * @param retHighest 返回匹配上的最后一个index
 */
function baseSortedIndex(array, value, retHighest?) {
  let low = 0
  let high = array === null ? low : array.length

  if (
    typeof value === 'number' &&
    value === value &&
    high < HALF_MAX_ARRAY_LENGTH
  ) {
    while (low < high) {
      const mid = (low + high) >>> 1
      const computed = array[mid]
      if (
        computed !== null &&
        !isSymbol(computed) &&
        (retHighest ? computed <= value : computed < value)
      ) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return high
  }

  return baseSortedIndexBy(array, value, (value) => value, retHighest)
}

export default baseSortedIndex
