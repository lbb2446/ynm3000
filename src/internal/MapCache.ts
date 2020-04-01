import Hash from './Hash'

function getMapData({ _data_ }, key) {
  return isKeyable(key)
    ? _data_[typeof key === 'string' ? 'string' : 'hash']
    : _data_['map']
}

// 是否可以作为key使用
function isKeyable(key): boolean {
  const keyType = typeof key
  return keyType === 'string' ||
    keyType === 'number' ||
    keyType === 'symbol' ||
    keyType === 'boolean'
    ? key !== '__proto__'
    : key === null
}

class MapCache {
  _data_: object
  size: number
  constructor(entries) {
    let index = -1
    this.clear()
    if (entries && entries.length) {
      while (++index < entries.length) {
        const entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }
  }
  clear() {
    this._data_ = {
      string: new Hash(null),
      hash: new Hash(null),
      map: new Map()
    }
    this.size = 0
  }
  has(key): boolean {
    return getMapData(this, key).has(key)
  }
  get(key) {
    return getMapData(this, key).get(key)
  }
  set(key, value) {
    let data = getMapData(this, key)
    // map,hash本身就自带size，has等属性/方法
    const size = data.size
    data.set(key, value)
    // 如果set之后数据没变，相当于重复，被覆盖，不做计数
    this.size = data.size == size ? 0 : 1
    return this
  }
  delete(key) {
    const result = getMapData(this, key).delete(key)
    this.size -= result ? 1 : 0
    return result
  }
}

export default MapCache
