import unicodeWords from './internal/unicodeWords'

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
)

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

function asciiWords(string) {
  return string.match(reAsciiWord)
}

function words(string, pattern?) {
  if (pattern === undefined) {
    const result = hasUnicodeWord ? unicodeWords(string) : asciiWords(string)
    return result
  }
  return string.match(pattern) || []
}

export default words
