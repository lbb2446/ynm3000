import baseFindKey from './internal/baseFindKey'
import baseForOwnRight from './internal/baseForOwnRight'

function findLastKey(object, predicate) {
  return baseFindKey(object, predicate, baseForOwnRight)
}

export default findLastKey
