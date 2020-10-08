import words from './words'
import toString from './toString'
import upperFirst from './upperFirst'

const camelCase = (string: any) =>
  words(toString(string).replace(/['\u2019]/g, '')).reduce(
    (result, word, index) => {
      word = word.toLowerCase()
      return result + (index ? upperFirst(word) : word) 
    },
    ''
  )

export default camelCase
