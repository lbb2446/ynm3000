import mapKey from '../src/mapKey'
import { expect } from 'chai'
import 'mocha'

describe('mapKey fn', () => {
  it('mapKey', () => {
    const result = mapKey({ a: 1, b: 2 }, function (value, key) {
      return key + value
    })
    expect(result).to.deep.equals({ a1: 1, b2: 2 })
  })
})
