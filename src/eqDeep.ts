import baseIsEqual from './internal/baseIsEqual'

function eqDeep(value, other) {
  return baseIsEqual(value, other)
}

export default eqDeep
