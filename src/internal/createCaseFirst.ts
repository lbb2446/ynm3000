import hasUnicode from './hasUnicode'
import stringToArray from './stringToArray'
import castSlice from './castSlice'

function createCaseFirst(methodName) {
  return (string) => {
    if (!string) {
      return ''
    }
    const strSymbols = hasUnicode(string) ? stringToArray(string) : undefined

    // 首字符
    const chr = strSymbols ? strSymbols[0] : string[0]
    // 剩余字符
    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join()
      : string.slice(1)

    return chr[methodName]() + trailing
  }
}
export default createCaseFirst
