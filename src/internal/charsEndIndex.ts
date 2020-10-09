import baseIndexOf from './baseIndexOf'

function charsEndIndex(strSymbols, chrSymbols) {
  let index = strSymbols.length
  while (--index && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index
}

export default charsEndIndex
