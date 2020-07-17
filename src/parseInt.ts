import root from './internal/root'

const reTrimStart = /^\s+/
const nativeParseInt = root.parseInt

function parseInt(string, radix?) {
  if (string == null) {
    return 0
  } else if (radix) {
    radix = +radix
  }
  return nativeParseInt(`${string}`.replace(reTrimStart, ''), radix || 0)
}

export default parseInt
