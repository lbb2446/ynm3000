/**
 * 直接属性与非继承属性
 * @param object
 * @param key
 */
function hasIn(object, key) {
  return object != null && key in Object(object)
}

export default hasIn
