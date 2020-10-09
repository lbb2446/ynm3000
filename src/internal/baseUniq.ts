import arrayIncludes from './arrayIncludes'
import arrayIncludesWith from './arrayIncludesWith'
import createSet from './createSet'
import setToArray from './setToArray'
import cacheHas from './cacheHas'
import SetCache from './SetCache'

const LARGE_ARRAY_SIZE = 200

function baseUniq(array, iteratee?, comparator?) {
  let index = -1
  let includes: any = arrayIncludes
  let isCommon = true

  let { length } = array
  const result = []
  let seen: any = result

  if (comparator) {
    isCommon = false
    includes = arrayIncludesWith
  } else if (length >= LARGE_ARRAY_SIZE) {
    const set = iteratee ? null : createSet(array)
    if (set) {
      return setToArray(array)
    }
    isCommon = false
    includes = cacheHas
    seen = new SetCache()
  } else {
    seen = iteratee ? [] : result
  }
  outer: while (++index < length) {
    let value = array[index]
    const computed = iteratee ? iteratee(value) : value
    value = comparator || value !== 0 ? value : 0

    if (isCommon && computed === computed) {
      let seenIndex = seen.length
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer
        }
      }
      if (iteratee) {
        seen.push(computed)
      }
      result.push(value)
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed)
      }
      result.push(value)
    }
  }
  return result
}

export default baseUniq
