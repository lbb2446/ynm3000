import sortedLastIndexOf from '../src/sortedLastIndexOf'
import { expect } from 'chai'
import 'mocha'

describe('sortedLastIndexOf fn', () => {
  it('sortedLastIndexOf', () => {
    const result = sortedLastIndexOf([4, 5, 5, 5, 6], 5)
    expect(result).to.equal(3)
  })
})
