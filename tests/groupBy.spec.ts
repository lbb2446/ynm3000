import groupBy from '../src/groupBy'
import { expect } from 'chai'
import 'mocha'

describe('groupBy fn', () => {
  it('groupBy', () => {
    const result = groupBy([4.1, 5.6, 5.7], Math.floor)
    expect(result).to.deep.equal({
      4: [4.1],
      5: [5.6, 5.7],
    })
  })
})
