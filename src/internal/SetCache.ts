import MapCache from './MapCache'

const HASH_UNDEFINED = '__lodash_hash_undefined__'

class SetCache {
  _data_: any
  push: (value: any) => SetCache
  constructor(values) {
    this._data_ = new MapCache(null)

    if (values && values.length) {
      let index = -1
      while (++index < values.length) {
        this.add(values[index])
      }
    }
  }
  add(value) {
    this._data_.set(value, HASH_UNDEFINED)
    return this
  }
  has(value) {
    return this._data_.has(value)
  }
}

SetCache.prototype.push = SetCache.prototype.add

export default SetCache
