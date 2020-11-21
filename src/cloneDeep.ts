import baseClone from './internal/baseClone'

const CLONE_DEEP_FLAG = 1
const CLONE_SYMBOLS_FLAG = 4

function cloneDeep(value) {
  // TODO: 源码是CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG，算出来的结果是5，不知道这样做的用意
  return baseClone(value, CLONE_DEEP_FLAG)
}

export default cloneDeep
