import baseGet from './internal/baseGet'

/**
 * 获取嵌套对象某个路径下的值
 * @param object
 * @param path
 * @param defaultValue
 */
function get(object, path, defaultValue?) {
  const result = object == null ? undefined : baseGet(object, path)

  return result === undefined ? defaultValue : result
}

export default get
