import sortedIndexBy from '../src/sortedIndexBy'
import { expect } from 'chai'
import 'mocha'

describe('sortedIndexBy fn', () => {
  it('sortedIndexBy', () => {
    const result = sortedIndexBy([{ n: 4 }, { n: 5 }], { n: 4 }, ({ n }) => n)
    expect(result).to.equal(0)
  })
})
