import assocIndexOf from './assocIndexOf'

class ListCache {
  _data_: Array<any>
  size: number
  constructor(entries) {
    if (entries && entries.length) {
      this.clear()
      let index = -1
      while (++index < entries.length) {
        const entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }
  }
  clear() {
    this._data_ = []
    this.size = 0
  }
  has(key) {
    return assocIndexOf(this._data_, key) > -1
  }
  get(key) {
    const index = assocIndexOf(this._data_, key)
    return index > -1 ? this._data_[index][1] : undefined
  }
  set(key, value) {
    const index = assocIndexOf(this._data_, key)
    if (index < 0) {
      this.size++
      this._data_.push([key, value])
    } else {
      this._data_[index][1] = value
    }
    return this
  }
  delete(key) {
    const index = assocIndexOf(this._data_, key)
    if (index < 0) {
      return false
    }
    if (index === this._data_.length - 1) {
      this._data_.pop()
    } else {
      this._data_.splice(index, 1)
    }
    this.size--
    return true
  }
}

export default ListCache
