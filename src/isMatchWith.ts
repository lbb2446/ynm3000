import baseIsMatch from './internal/baseIsMatch'
import getMatchData from './internal/getMatchData'

function isMatchWith(object, source, customizer) {
  customizer = typeof customizer === 'function' ? customizer : undefined
  return baseIsMatch(object, source, getMatchData(source), customizer)
}

export default isMatchWith
