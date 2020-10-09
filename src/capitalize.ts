import upperFirst from './upperFirst'
import toString from './toString'

const capitalize = (string) => upperFirst(toString(string).toLowerCase())

export default capitalize
