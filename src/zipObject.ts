import baseZipObject from './internal/baseZipObject'
import assignValue from './internal/assignValue'

function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue)
}

export default zipObject
