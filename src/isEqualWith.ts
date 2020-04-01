import baseIsEqual from './internal/baseIsEqual'

function isEqualWith(value, other, customizer?) {
  customizer = typeof customizer === 'function' ? customizer : undefined
  const result = customizer ? customizer(value, other) : undefined
  return result === undefined
    ? baseIsEqual(value, other, undefined, customizer)
    : !!result
}

export default isEqualWith
