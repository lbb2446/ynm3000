import baseIndexOfWith from './baseIndexOfWith'
import copyArray from './copyArray'
import map from '../map'
import baseIndexOf from './baseIndexOf'

function basePullAll(array, values, iteratee?, comparator?) {
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf
  const { length } = values

  let index = -1
  //TODO:这个seen拿来干嘛的没看懂
  let seen = array

  if (array === values) {
    values = copyArray(values)
  }
  if (iteratee) {
    seen = map(array, (value) => iteratee(value))
  }
  while (++index < length) {
    let fromIndex = 0
    const value = values[index]
    const computed = iteratee ? iteratee(value) : value

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        seen.splice(fromIndex, 1)
      }
      array.splice(fromIndex, 1)
    }
  }
  return array
}

export default basePullAll
