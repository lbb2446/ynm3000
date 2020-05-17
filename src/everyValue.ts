/**
 * 对象 内每个值是否都符合传入的校验规则
 * @param object
 * @param predicate
 */
function everyValue(object, predicate) {
  object = Object(object)

  const props = Object.keys(object)

  for (const key of props) {
    if (!predicate(object[key], key, object)) {
      return false
    }
  }

  // let index = -1
  // const length = array == null ? 0 : array.length
  // while (++index < length) {
  //   if (!predicate(Object[array[index]], array[index], object)) {
  //     return false
  //   }
  // }
  return true
}

export default everyValue
