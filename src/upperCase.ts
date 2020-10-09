import words from './words'
import toString from './toString'

const upperCase = (string) => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce(
    (result, word, index) => result + (index ? ' ' : '') + word.toUpperCase(),
    ''
  )
)

export default upperCase
