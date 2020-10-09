import baseSet from './baseSet'
import baseGet from './baseGet'

function baseUpdate(object, path, updater, customizer?) {
  return baseSet(object, path, updater(baseGet(object, path)), customizer)
}

export default baseUpdate
