const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {
  _data_: object
  size: number
  constructor(entries) {
    let index = -1
    this.clear()
    if (entries && entries.length) {
      //可能没有foreach方法
      // entries.forEach(entry => {
      //   this.set(entry[0], entry[1])
      // })
      while (++index < entries.length) {
        const entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }
  }
  clear() {
    this._data_ = Object.create(null)
    this.size = 0
  }
  set(key, value) {
    let data = this._data_
    const result = this.has(key)
    this.size += result ? 0 : 1
    // 用于区分是没有这个属性还是属性值是undefined
    data[key] = value === undefined ? HASH_UNDEFINED : value
    return this
  }
  get(key) {
    const result = this._data_[key]
    return result === HASH_UNDEFINED ? undefined : result
  }
  delete(key) {
    const result = this.has(key) && delete this._data_[key]
    this.size -= result ? 1 : 0
    return result
  }
  has(key) {
    return this._data_[key] !== undefined
  }
}

export default Hash
