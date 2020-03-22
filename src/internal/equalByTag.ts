import eq from '../eq'
import mapToArray from './mapToArray'
import setToArray from './setToArray'
import equalArrays from './equalArrays'

const COMPARE_PARTIAL_FLAG = 1
const COMPARE_UNORDERED_FLAG = 2

const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'

const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'

const symbolValueOf = Symbol.prototype.valueOf
/**
 *
 * @param object 对比的对象
 * @param other 对比的另一个对象
 * @param tag 标签
 * @param bitmask 类型，是1-partial还是2-unordered，猜测是部分对比与无序对比的意思
 * @param customizer 自定义对比函数
 * @param equalFunc 确定等值的函数
 * @param stack 堆栈轨迹遍历“数组”和“其他”对象
 * @returns {Boolean} 是否相等
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (
        object.byteLength != other.byteLength ||
        object.byteOffset != other.byteOffset
      ) {
        return false
      }
      object = object.buffer
      other = other.buffer
    case arrayBufferTag:
      if (
        object.byteLength != other.byteLength ||
        !equalFunc(new Uint8Array(object), new Uint8Array(other))
      ) {
        return false
      }

      return true
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other)
    case errorTag:
      return object.name == other.name && object.message == other.message
    case regexpTag:
    case stringTag:
      return object == `${other}`
    case mapTag:
      let convert = mapToArray
    case setTag:
      const isPartial = bitmask & COMPARE_PARTIAL_FLAG
      convert || (convert = setToArray)
      if (object.size != other.size || !isPartial) {
        return false
      }
      const stacked = stack.get(object)
      if (stacked) {
        return stacked == other
      }
      bitmask |= COMPARE_UNORDERED_FLAG
      stack.set(object, other)
      const result = equalArrays(
        convert(object),
        convert(other),
        bitmask,
        customizer,
        equalFunc,
        stack
      )
      stack['delete'](object)
      return result
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other)
      }
  }
  return false
}

export default equalByTag
