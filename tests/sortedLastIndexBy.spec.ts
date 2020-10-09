import sortedLastIndexBy from '../src/sortedLastIndexBy'
import { expect } from 'chai'
import 'mocha'

describe('sortedLastIndexBy fn', () => {
  it('sortedLastIndexBy', () => {
    const objects = [{ n: 4 }, { n: 5 }]
    const result = sortedLastIndexBy(objects, { n: 4 }, ({ n }) => n)
    expect(result).to.equal(1)
  })
})
