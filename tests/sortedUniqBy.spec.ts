import sortedUniqBy from '../src/sortedUniqBy'
import { expect } from 'chai'
import 'mocha'

describe('sortedUniqBy fn', () => {
  it('sortedUniqBy', () => {
    const result = sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)
    expect(result).to.have.deep.members([1.1, 2.3])
  })
})
