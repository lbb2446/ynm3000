import baseMatches from './internal/baseMatches'
import baseClone from './internal/baseClone'

const CLONE_DEEP_FLAG = 1

function matches(source) {
  return baseMatches(baseClone(source, CLONE_DEEP_FLAG))
}

export default matches
