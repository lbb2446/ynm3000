import getSymbolsIn from './getSymbolsIn'

function getAllKeysIn(object) {
  let result = []
  for (const key in object) {
    result.push(key)
  }
  if (!Array.isArray(object)) {
    result.push(...getSymbolsIn(object))
  }
  return result
}

export default getAllKeysIn
