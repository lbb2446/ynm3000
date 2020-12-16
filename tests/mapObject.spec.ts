import mapObject from '../src/mapObject'
import { expect } from 'chai'
import 'mocha'

describe('mapObject fn', () => {
  it('mapObject', () => {
    function square(n) {
      return n * n
    }
    const result = mapObject({ a: 4, b: 8 }, square)
    expect(result).to.have.members([16, 64])
  })
})
