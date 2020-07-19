import baseGet from './baseGet'

function basePropertyDeep(path) {
  return (object) => baseGet(object, path)
}

export default basePropertyDeep
