import difference from '../src/difference'
import { expect } from 'chai'
import 'mocha'

describe('difference fn', () => {
  it('difference', () => {
    const result = difference([2, 1], [2, 3])
    expect(result).to.have.members([1])
  })
})
