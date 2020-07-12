/**
 * 直接属性与原型链上的属性
 * @param object
 * @param key
 */
function hasIn(object, key) {
  return object != null && key in Object(object)
}

export default hasIn
