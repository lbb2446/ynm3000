/**
 * key数组变value数组
 * @param object
 * @param props
 */
function baseValues(object, props) {
  return props == null ? [] : props.map((key) => object[key])
}

export default baseValues
