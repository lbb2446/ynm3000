import baseWhile from './internal/baseWhile'

function takeRightWhile(array, predicate) {
  return array != null && array.length
    ? baseWhile(array, predicate, false, true)
    : []
}
export default takeRightWhile
