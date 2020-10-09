import baseSum from './internal/baseSum'

function sum(array) {
  return array != null && array.length ? baseSum(array, (value) => value) : 0
}

export default sum
