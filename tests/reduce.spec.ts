import reduce from '../src/reduce'
import { expect } from 'chai'
import 'mocha'

describe('reduce fn', () => {
  it('reduce', () => {
    const result = reduce([1, 2], (sum, n) => sum + n, 0)
    expect(result).to.equal(3)
  })
  it('not regular reduce', () => {
    const result1 = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        ;(result[value] || (result[value] = [])).push(key)
        return result
      },
      {}
    )
    expect(result1).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] })
  })
})
