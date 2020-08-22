import sortedIndexOf from '../src/sortedIndexOf'
import { expect } from 'chai'
import 'mocha'

describe('sortedIndexOf fn', () => {
  it('sortedIndexOf', () => {
    const result = sortedIndexOf([4, 5, 5, 5, 6], 5)
    expect(result).to.equal(1)
  })
})
