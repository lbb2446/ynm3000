import castPath from './internal/castPath'
import isLength from './isLength'
import isIndex from './internal/isIndex'
import toKey from './internal/toKey'
import isArguments from './isArguments'

function hasPath(object, path) {
  path = castPath(path, object)

  let index = -1
  let length = path.length
  let result = false
  let key

  while (++index < length) {
    key = toKey(path[index])
    if (
      !(result =
        object[key] != null &&
        Object.prototype.hasOwnProperty.call(object, key))
    ) {
      break
    }
    object = object[key]
  }
  // 遍历完了为true，或者未遍历完就是false了
  if (result || ++index != length) {
    return result
  }
  // 最后一层是数组
  length = object == null ? 0 : object.length
  return (
    !!length &&
    isLength(length) &&
    isIndex(key, length) &&
    (Array.isArray(object) || isArguments(object))
  )
}

export default hasPath
