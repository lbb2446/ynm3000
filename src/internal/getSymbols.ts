const propertyIsEnumerable = Object.prototype.propertyIsEnumerable
const getOwnPropertySymbols = Object.getOwnPropertySymbols

/**
 * 获取当前对象里可枚举的symbol属性
 * @param object
 */
function getSymbols(object) {
  if (object == null) {
    return []
  }
  object = Object(object)
  return getOwnPropertySymbols(object).filter((symbol) =>
    propertyIsEnumerable.call(object, symbol)
  )
}

export default getSymbols
