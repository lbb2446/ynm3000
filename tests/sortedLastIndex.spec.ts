import sortedLastIndex from '../src/sortedLastIndex'
import { expect } from 'chai'
import 'mocha'

describe('sortedLastIndex fn', () => {
  it('sortedLastIndex', () => {
    const result = sortedLastIndex([4, 5, 5, 5, 6], 5)
    expect(result).to.equal(4)
  })
})
