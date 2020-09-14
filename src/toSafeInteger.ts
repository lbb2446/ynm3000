import toInteger from './toInteger'

const MAX_SAFE_INTEGER = 9007199254740991

function toSafeInteger(value) {
  if (!value) {
    return 0
  }
  value = toInteger(value)

  if (value < -MAX_SAFE_INTEGER) {
    return -MAX_SAFE_INTEGER
  }
  if (value > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER
  }
  return value
}

export default toSafeInteger
