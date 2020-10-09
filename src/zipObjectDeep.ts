import baseZipObject from './internal/baseZipObject'
import baseSet from './internal/baseSet'

function zipObjectDeep(props, values) {
  return baseZipObject(props || [], values || [], baseSet)
}

export default zipObjectDeep
