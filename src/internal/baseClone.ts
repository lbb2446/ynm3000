import cloneArrayBuffer from './cloneArrayBuffer'
import cloneDataView from './cloneDataView'
import cloneTypedArray from './cloneTypedArray'
import cloneRegExp from './cloneRegExp'
import cloneSymbol from './cloneSymbol'
import isObject from '../isObject'
import getTag from './getTag'
import copyArray from './copyArray'
import { isBuffer } from 'util'
import cloneBuffer from './cloneBuffer'
import initCloneObject from './initCloneObject'
import copySymbolsIn from './copySymbolsIn'
import copyObject from './copyObject'
import keysIn from '../keysIn'
import copySymbols from './copySymbols'
import Stack from './Stack'
import isTypedArray from '../isTypedArray'
import getAllKeysIn from './getAllKeysIn'
import getAllKeys from './getAllKeys'
import keys from '../keys'
import arrayEach from './arrayEach'
import assignValue from './assignValue'

const CLONE_DEEP_FLAG = 1
const CLONE_FLAT_FLAG = 2
const CLONE_SYMBOLS_FLAG = 4

const argsTag = '[object Arguments]'
const arrayTag = '[object Array]'
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const mapTag = '[object Map]'
const numberTag = '[object Number]'
const objectTag = '[object Object]'
const regexpTag = '[object RegExp]'
const setTag = '[object Set]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const weakMapTag = '[object WeakMap]'

const arrayBufferTag = '[object ArrayBuffer]'
const dataViewTag = '[object DataView]'
const float32Tag = '[object Float32Array]'
const float64Tag = '[object Float64Array]'
const int8Tag = '[object Int8Array]'
const int16Tag = '[object Int16Array]'
const int32Tag = '[object Int32Array]'
const uint8Tag = '[object Uint8Array]'
const uint8ClampedTag = '[object Uint8ClampedArray]'
const uint16Tag = '[object Uint16Array]'
const uint32Tag = '[object Uint32Array]'

const cloneableTags = {}
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[
  arrayBufferTag
] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[
  dateTag
] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[
  int8Tag
] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[
  mapTag
] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[
  regexpTag
] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[
  symbolTag
] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[
  uint16Tag
] = cloneableTags[uint32Tag] = true
cloneableTags[errorTag] = cloneableTags[weakMapTag] = false

const hasOwnProperty = Object.prototype.hasOwnProperty

function initCloneByTag(object, tag, isDeep) {
  const Ctor = object.constructor
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object)

    case boolTag:
    case dateTag:
      return new Ctor(+object)

    case dataViewTag:
      return cloneDataView(object, isDeep)

    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return cloneTypedArray(object, isDeep)

    case mapTag:
      return new Ctor()

    case numberTag:
    case stringTag:
      return new Ctor(object)

    case regexpTag:
      return cloneRegExp(object)

    case setTag:
      return new Ctor()

    case symbolTag:
      return cloneSymbol(object)
  }
}

function initCloneArray(array) {
  const { length } = array
  const result = array.constructor(length)
  if (
    length &&
    typeof array[0] === 'string' &&
    hasOwnProperty.call(array, 'index')
  ) {
    result.index = array.index
    result.input = array.input
  }
  return result
}

function baseClone(value, bitmask, customizer?, key?, object?, stack?) {
  let result
  const isDeep = bitmask & CLONE_DEEP_FLAG
  const isFlat = bitmask & CLONE_FLAT_FLAG
  const isFull = bitmask & CLONE_SYMBOLS_FLAG

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value)
  }
  if (result !== undefined) {
    return result
  }

  if (!isObject(value)) {
    return value
  }

  const isArr = Array.isArray(value)
  const tag = getTag(value)

  if (isArr) {
    result = initCloneArray(value)
    if (!isDeep) {
      return copyArray(value, result)
    }
  } else {
    const isFunc = typeof value === 'function'
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep)
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value)
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, copyObject(value, keysIn(value), result))
          : copySymbols(value, Object.assign(result, value))
      }
    } else {
      if (isFunc || !cloneableTags[tag]) {
        return object ? value : {}
      }
      result = initCloneByTag(value, tag, isDeep)
    }
  }
  stack || (stack = new Stack())
  const stacked = stack.get(value)
  if (stacked) {
    return stacked
  }
  stack.set(value, result)
  if (tag == mapTag) {
    value.forEach((subValue, key) => {
      result.set(
        key,
        baseClone(subValue, bitmask, customizer, key, value, stack)
      )
    })
    return result
  }
  if (tag == setTag) {
    value.forEach((subValue) => {
      result.add(baseClone(subValue, bitmask, customizer, key, value, stack))
    })
    return result
  }
  if (isTypedArray(value)) {
    return value
  }
  const keysFunc = isFull
    ? isFlat
      ? getAllKeysIn
      : getAllKeys
    : isFlat
    ? keysIn
    : keys

  const props = isArr ? undefined : keysFunc(value)
  arrayEach(props || value, (subValue, key) => {
    if (props) {
      key = subValue
      subValue = value[key]
    }

    assignValue(
      result,
      key,
      baseClone(subValue, bitmask, customizer, key, value, stack)
    )
  })
  return result
}

export default baseClone
