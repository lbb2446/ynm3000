import sortedIndex from '../src/sortedIndex'
import { expect } from 'chai'
import 'mocha'

describe('sortedIndex fn', () => {
  it('sortedIndex', () => {
    const result = sortedIndex([30, 50], 40)
    expect(result).to.equal(1)
  })
})
