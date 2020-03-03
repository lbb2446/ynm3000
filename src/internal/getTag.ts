/**
 * 通过object.prototype.toString获取元素的类型
 * @param value
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  } else {
    return Object.prototype.toString.call(value);
  }
}

export default getTag;
