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
    if (key === 'a') {
      it('forEach' + key, () => {
        expect(value).to.equal(1)
      })
    } else if (key === 'b') {
      it('forEach' + key, () => {
        expect(value).to.equal(2)
      })
    }
  })
})
