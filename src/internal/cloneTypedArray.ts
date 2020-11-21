import cloneArrayBuffer from './cloneArrayBuffer'

function cloneTypedArray(typedArray, isDeep) {
  const buffer = isDeep
    ? cloneArrayBuffer(typedArray.buffer)
    : typedArray.buffer
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length)
}

export default cloneTypedArray
