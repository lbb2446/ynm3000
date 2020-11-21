import arrayReduce from './internal/arrayReduce'
import defaultTo from './defaultTo'

/**
 * 有很多个默认值，不成功的话就一一往下匹配
 * @param value 
 * @param defaultValues 
 */
function defaultToAny(value, ...defaultValues) {
  return arrayReduce(defaultValues, defaultTo, value)
}

export default defaultToAny
