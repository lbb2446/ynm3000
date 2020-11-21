import copyObject from './copyObject'
import getSymbolsIn from './getSymbolsIn'

function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object)
}

export default copySymbolsIn
