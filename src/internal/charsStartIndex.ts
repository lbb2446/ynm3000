import baseIndexOf from './baseIndexOf'

function charsStartIndex(strSymbols, chrSymbols) {
  let index = -1
  const length = strSymbols.length
  while (
    ++index < length &&
    baseIndexOf(chrSymbols, strSymbols[index], 0) > -1
  ) {}
  return index
}

export default charsStartIndex
