import toString from './toString'
import words from './words'

//双引号
const reQuotes = /['\u2019]/g

const lowerCase = (string) =>
  words(toString(string).replace(reQuotes, '')).reduce(
    (result, word, index) => result + (index ? ' ' : '') + word.toLowerCase(),
    ''
  )

export default lowerCase
