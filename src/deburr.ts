import deburrLetter from './internal/deburrLetter'

const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g

/** Used to compose unicode character classes. */
const rsComboMarksRange = '\\u0300-\\u036f'
const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
const rsComboSymbolsRange = '\\u20d0-\\u20ff'
const rsComboMarksExtendedRange = '\\u1ab0-\\u1aff'
const rsComboMarksSupplementRange = '\\u1dc0-\\u1dff'
const rsComboRange =
  rsComboMarksRange +
  reComboHalfMarksRange +
  rsComboSymbolsRange +
  rsComboMarksExtendedRange +
  rsComboMarksSupplementRange

/** Used to compose unicode capture groups. */
const rsCombo = `[${rsComboRange}]`

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
const reComboMark = RegExp(rsCombo, 'g')

/**
 * 对string做去毛刺处理，音标之类的非英文(拉丁文，组合标记等)
 * @param string
 */
function deburr(string) {
  return (
    string && string.replace(reLatin, deburrLetter).replace(reComboMark, '')
  )
}

export default deburr
