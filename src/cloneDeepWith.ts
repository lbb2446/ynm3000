import baseClone from './internal/baseClone'

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1
// const CLONE_SYMBOLS_FLAG = 4

function cloneDeepWith(value, customizer?) {
  customizer = typeof customizer === 'function' ? customizer : undefined
  return baseClone(value, CLONE_DEEP_FLAG, customizer)
}

export default cloneDeepWith
