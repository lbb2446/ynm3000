import isObjectLike from '../isObjectLike'
import baseIsEqualDeep from './baseIsEqualDeep'
/**
 *
 * @param value
 * @param other
 * @param bitmask
 * @param customizer
 * @param stack
 */
function baseIsEqual(value, other, bitmask?, customizer?, stack?) {
  if (value === other) {
    return true
  }
  if (
    value == null ||
    other == null ||
    (!isObjectLike(value) && !isObjectLike(other))
  ) {
    return value !== value && other !== other
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack)
}

export default baseIsEqual
