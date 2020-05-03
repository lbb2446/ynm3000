import baseToString from './baseToString'
import baseToNumber from './baseToNumber'

function createMathOperation(operator, defaultValue) {
  return (value, other) => {
    if (value === undefined && other === undefined) {
      return defaultValue
    }
    if (value === undefined || other === undefined) {
      return value || other
    }
    if (typeof value === 'string' || typeof other === 'string') {
      value = baseToString(value)
      other = baseToString(other)
    } else {
      value = baseToNumber(value)
      other = baseToNumber(other)
    }
    return operator(value, other)
  }
}

export default createMathOperation
