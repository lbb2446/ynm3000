/**
 * 是否要使用默认值
 * @param value
 * @param defaultValue
 */
function defaultTo(value, defaultValue) {
  return value == null || value !== value ? defaultValue : value
}

export default defaultTo
