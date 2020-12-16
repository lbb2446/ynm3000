import isKey from './isKey'
import isStrictComparable from './isStrictComparable'
import matchesStrictComparable from './matchesStrictComparable'
import toKey from './toKey'
import get from '../get'
import hasIn from '../hasIn'
import baseIsEqual from './baseIsEqual'

const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue)
  }
  return (object) => {
    const objValue = get(object, path)
    return objValue === undefined && objValue === srcValue
      ? hasIn(objValue, path)
      : baseIsEqual(
          srcValue,
          objValue,
          COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
        )
  }
}

export default baseMatchesProperty
