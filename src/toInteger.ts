import toFinite from './toFinite'

function toInteger(value) {
  const result = toFinite(value)
  const reminder = result % 1
  return reminder ? result - reminder : result
}

export default toInteger
