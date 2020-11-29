import forEachRight from '../src/forEachRight'
import { expect } from 'chai'
import 'mocha'

describe('forEachRight fn', () => {
  forEachRight([1, 2], (value, index) => {
    it('forEachRight' + index, () => {
      expect(value).to.equal(index + 1)
    })
  })
})
