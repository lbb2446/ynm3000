import getSymbols from './getSymbols'

/**
 * 获取当前对象中以及其原型链上的所有可枚举的symbol属性
 * @param object
 */
function getSymbolsIn(object) {
  let result = []
  while (object) {
    result.push(...getSymbols(object))
    object = Object.getPrototypeOf(Object(object))
  }
  return result
}

export default getSymbolsIn
