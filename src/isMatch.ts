import baseIsMatch from './internal/baseIsMatch'
import getMatchData from './internal/getMatchData'

function isMatch(object, source) {
  return object === source || baseIsMatch(object, source, getMatchData(source))
}

export default isMatch
