import each from '../src/each'
import { expect } from 'chai'
import 'mocha'

describe('each fn', () => {
  each([1, 2], (value, index) => {
    it('each' + index, () => {
      expect(value).to.equal(index + 1)
    })
  })
})
