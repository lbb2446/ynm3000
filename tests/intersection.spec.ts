import intersection from '../src/intersection'
import { expect } from 'chai'
import 'mocha'

describe('intersection fn', () => {
  it('intersection1', () => {
    const result = intersection([1, 2], [2, 3])
    expect(result).to.have.deep.members([2])
  })
  it('intersection2', () => {
    const result = intersection([1, 2], [2, 3], [3, 4])
    expect(result).to.have.deep.members([])
  })
  it('intersection3', () => {
    const result = intersection([1, 2], [2, 3], [2, 4, 7, 9])
    expect(result).to.have.deep.members([2])
  })
})
