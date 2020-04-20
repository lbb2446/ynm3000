import words from './words'
import toString from './toString'

const kebabCase = (string) =>
  words(toString(string).replace(/['\u2019]/g, '')).reduce(
    (result, word, index) => result + (index ? '-' : '') + word.toLowerCase(),
    ''
  )

export default kebabCase
