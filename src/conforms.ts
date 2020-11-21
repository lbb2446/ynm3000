import baseConforms from './internal/baseConforms'
import baseClone from './internal/baseClone'

const CLONE_DEEP_FLAG = 1

/**
 * 给对象用的filter函数
 * @param source 
 */
function conforms(source){
  return baseConforms(baseClone(source,CLONE_DEEP_FLAG))
}

export default conforms