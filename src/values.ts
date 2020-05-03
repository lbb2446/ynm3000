import baseValues from './internal/baseValues'
import keys from './keys'
/**
 * 内容变数组
 * @param object
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object))
}

export default values
