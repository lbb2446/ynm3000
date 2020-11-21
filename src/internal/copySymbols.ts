import copyObject from './copyObject'
import getSymbols from './getSymbols'

function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object)
}

export default copySymbols
