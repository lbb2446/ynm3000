import words from './words'
import upperFirst from './upperFirst'

const startCase = (string) =>
  words(string.replace(/['\u2019]/g, '')).reduce(
    (result, word, index) => result + (index ? ' ' : '') + upperFirst(word),
    ''
  )

export default startCase
