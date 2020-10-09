import xor from '../src/xor'
import { expect } from 'chai'
import 'mocha'

describe('xor fn', () => {
  it('xor', () => {
    const result = xor([2, 1], [2, 3])
    expect(result).to.have.deep.members([1, 3])
  })
})
