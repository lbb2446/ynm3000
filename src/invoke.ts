import castPath from './internal/castPath'
import parent from './internal/parent'
import toKey from './internal/toKey'
import last from './last'

/**
 * 根据传入的字符串路径处理对象
 * @param object
 * @param path
 * @param args
 */
function invoke(object, path, args) {
  path = castPath(path, object)
  object = parent(object, path)
  const func = object == null ? object : object[toKey(last(path))]
  return func == null ? undefined : func.apply(object, args)
}

export default invoke
