const reFlags = /\w*$/

function cloneRegExp(regexp) {
  const result = new regexp.constructor(regexp.source, regexp.exec(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

export default cloneRegExp
