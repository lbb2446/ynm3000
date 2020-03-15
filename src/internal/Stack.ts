import ListCache from './ListCache'
import MapCache from './MapCache'

const LARGE_ARRAY_SIZE = 200

// 一个有优化的存放数据的模块，200以内是list，大于200用map
class Stack {
  _data_: ListCache | MapCache
  size: number
  constructor(entries) {
    this._data_ = new ListCache(entries)
    this.size = this._data_.size
  }
  has(key) {
    return this._data_.has(key)
  }
  get(key) {
    return this._data_.get(key)
  }
  set(key, value) {
    let data = this._data_
    if (data instanceof ListCache) {
      const paire = data._data_
      if (paire.length < LARGE_ARRAY_SIZE - 1) {
        paire.push([key, value])
        this.size = ++data.size
        return this
      }
      data = this._data_ = new MapCache(paire)
    }
    data.set(key, value)
    this.size = data.size
    return this
  }
  delete(key) {
    const result = this._data_.delete(key)
    this.size = this._data_.size
    return result
  }
}

export default Stack
