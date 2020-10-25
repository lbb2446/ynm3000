import keys from '../keys'
import baseConformsTo from './baseConformsTo'

function baseConforms(source){
  const props = keys(source)
  return object=> baseConformsTo(object,source,props)
}

export default baseConforms