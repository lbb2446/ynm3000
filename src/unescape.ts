const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
}

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g
const reHasEscapedHtml = RegExp(reEscapedHtml.source)

/**
 * escape的反函数，解码
 * @param string
 */
function unescape(string) {
  return string && reEscapedHtml.test(string)
    ? string.replace(reHasEscapedHtml, (entity) => htmlUnescapes[entity])
    : string || ''
}

export default unescape
