import xorBy from '../src/xorBy'
import { expect } from 'chai'
import 'mocha'

describe('xorBy fn', () => {
  it('xorBy', () => {
    const result = xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
    expect(result).to.have.deep.members([1.2, 3.4])
  })
})
