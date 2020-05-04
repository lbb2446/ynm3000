import forEach from '../src/forEach'
import { expect } from 'chai'
import 'mocha'

describe('forEach fn', () => {
  forEach([1, 2], (value, index) => {
    it('forEach' + index, () => {
      expect(value).to.equal(index + 1)
    })
  })

  forEach({ a: 1, b: 2 }, (value, key) => {
    it('forEach' + key, () => {
      expect(value).to.equal(value)
    })
  })
})
