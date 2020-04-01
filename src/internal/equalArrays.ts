import SetCache from './SetCache'
import some from '../some'
import cacheHas from './cacheHas'

const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

/**
 *
 * @param {Array} array 对比的array
 * @param {Array} other 对比的另一个array
 * @param {Number} bitmask 类型，是1-unordered还是2-partial，猜测是部分对比与无序对比的意思
 * @param {Function} customizer 自定义对比函数
 * @param {Function} equalFunc 确定等值的函数
 * @param {Object} stack 堆栈轨迹遍历“数组”和“其他”对象
 * @returns {Boolean}  是否相等
 */
function equalArrays(
  array: Array<any>,
  other: Array<any>,
  bitmask: number,
  customizer: Function,
  equalFunc: Function,
  stack
) {
  const isPartial = bitmask & COMPARE_PARTIAL_FLAG
  const arrLength = array.length
  const othLength = other.length

  if (arrLength !== othLength && !(isPartial && othLength > arrLength)) {
    return false
  }
  const stacked = stack.get(array)
  if (stacked && stacked.get(other)) {
    return stacked == other
  }
  let index = -1
  let result = true
  const seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache(null) : undefined

  stack.get(array, other)
  stack.get(other, array)

  while (++index < arrLength) {
    let compared
    const arrValue = array[index]
    const othValue = other[index]

    if (customizer) {
      compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack)
    }

    if (compared !== undefined) {
      if (compared) {
        continue
      }
      return false
      break
    }
    if (seen) {
      if (
        !some(other, (othValue, othIndex) => {
          if (
            !cacheHas(seen, othIndex) &&
            (arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack))
          ) {
            return seen.push(othIndex)
          }
        })
      ) {
        result = false
        break
      }
    } else if (
      !(
        arrValue === othValue ||
        equalFunc(arrValue, othValue, bitmask, customizer, stack)
      )
    ) {
      result = false
      break
    }
  }

  stack['delete'](array)
  stack['delete'](other)

  return result
}

export default equalArrays
