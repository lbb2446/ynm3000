import baseWhile from './internal/baseWhile'

function takeWhile(array, predicate) {
  return array != null && array.length ? baseWhile(array, predicate) : []
}

export default takeWhile
