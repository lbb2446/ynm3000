import baseSum from './internal/baseSum'

function meanBy(array, iteratee) {
  const length = array == null ? 0 : array.length
  return length ? baseSum(array, iteratee) / length : NaN
}

export default meanBy
