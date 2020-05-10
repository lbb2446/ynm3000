import isArguments from '../isArguments'

// 内置的Symbol.isConcatSpreadable符号用于配置某对象作为Array.prototype.concat()方法的参数时是否展开其数组元素。
const spreadableSymbol = Symbol.isConcatSpreadable

/**
 * 检查是否是扁平化的数组或对象
 * @param value
 */
function isFlattenable(value) {
  return (
    Array.isArray(value) ||
    isArguments(value) ||
    !!(value && value[spreadableSymbol])
  )
}

export default isFlattenable
