import baseUpdate from './internal/baseUpdate'

function update(object, path, updater) {
  return object == null ? object : baseUpdate(object, path, updater)
}

export default update
