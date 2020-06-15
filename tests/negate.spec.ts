import negate from '../src/negate'
import { expect } from 'chai'
import 'mocha'

describe('negate fn', () => {
  it('negate', () => {
    const odd = (item) => item % 2 !== 0
    const newFunc = negate(odd)
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(newFunc)
    expect(result).to.deep.equal([2, 4, 6, 8])
  })
})
