import words from './words'
import toString from './toString'

function snakeCase(string) {
  return words(toString(string).replace(/['\u2019]/g, '')).reduce(
    (result, word, index) => result + (index ? '_' : '') + word.toLowerCase(),
    ''
  )
}

export default snakeCase
