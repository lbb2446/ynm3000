import without from '../src/without'
import { expect } from 'chai'
import 'mocha'

describe('without fn', () => {
  it('without', () => {
    const result = without([2, 1, 2, 3], 1, 2)
    expect(result).to.have.deep.members([3])
  })
})
