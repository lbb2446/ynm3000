import before from './before'

/**
 * 函数可以调用无限次，但只执行一次
 * @param func
 */
function once(func) {
  return before(2, func)
}

export default once
