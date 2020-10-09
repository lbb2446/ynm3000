import isObject from './isObject'
import baseToString from './internal/baseToString'
import toString from './toString'
import hasUnicode from './internal/hasUnicode'
import stringToArray from './internal/stringToArray'
import stringSize from './internal/stringSize'
import castSlice from './internal/castSlice'
import isRegExp from './isRegExp'

const DEFAULT_TRUNC_LENGTH = 30
const DEFAULT_TRUNC_OMISSION = '...'

const reFlags = /\w*$/

/**
 * 截取函数
 * @param string
 * @param options omission参数是阙文的意思，指省略号之类的代替符
 */
function truncate(string, options?) {
  let separator
  let length = DEFAULT_TRUNC_LENGTH
  let omission = DEFAULT_TRUNC_OMISSION

  if (isObject(options)) {
    separator = 'separator' in options ? options.separator : separator
    length = 'length' in options ? options.length : length
    omission = 'omission' in options ? baseToString(options.omission) : omission
  }

  string = toString(string)

  let strSymbols
  let strLength = string.length
  if (hasUnicode(string)) {
    strSymbols = stringToArray(string)
    strLength = strSymbols.length
  }

  if (length > strLength) {
    return string
  }

  let end = length - stringSize(omission)
  if (end < 1) {
    return omission
  }

  let result = strSymbols
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end)

  if (separator === undefined) {
    return result + omission
  }
  if (strSymbols) {
    end += result.length - end
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      let match
      let newEnd
      const substring = result
      if (!separator.global) {
        separator = RegExp(separator.source, `${reFlags.exec(separator)}g`)
      }
      separator.lastIndex = 0
      while ((match = separator.exec(substring))) {
        newEnd = match.index
      }
      // 如果匹配到了正则的值，就更新end，截取到匹配到的这一位
      result = result.slice(0, newEnd === undefined ? end : newEnd)
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    const index = result.lastIndexOf(separator)
    if (index > -1) {
      result = result.slice(0, index)
    }
  }
  return result + omission
}

export default truncate
