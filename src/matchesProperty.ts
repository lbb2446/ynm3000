import baseClone from './internal/baseClone'
import baseMatchesProperty from './internal/baseMatchesProperty'

const CLONE_DEEP_FLAG = 1

function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG))
}

export default matchesProperty
