import isArguments from '../isArguments'
import isBuffer from '../isBuffer'
import isTypedArray from '../isTypedArray'
import isIndex from './isIndex'

function arrayLikeKeys(value, inherited?: boolean) {
  const isArr = Array.isArray(value)
  const isArgs = !isArr && isArguments(value)
  const isBuff = !isArr && !isArgs && isBuffer(value)
  const isType = !isArr && !isArgs && !isBuff && isTypedArray(value)
  const skipIndexes = isArr || isArgs || isBuff || isType
  const length = value.length

  const result = new Array(skipIndexes ? length : 0)
  let index = skipIndexes ? -1 : length

  while (++index < length) {
    result[index] = `${index}`
  }

  for (let key in value) {
    if (
      inherited ||
      (Object.prototype.hasOwnProperty.call(value, key) &&
        !(skipIndexes && (key === 'length' || isIndex(key, length))))
    ) {
      result.push(key)
    }
  }

  return result
}

export default arrayLikeKeys
