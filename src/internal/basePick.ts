import basePickBy from './basePickBy'
import hasIn from '../hasIn'

function basePick(object, paths) {
  return basePickBy(object, paths, (value, path) => hasIn(object, path))
}

export default basePick
