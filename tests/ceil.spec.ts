import ceil from '../src/ceil'
import { expect } from 'chai'
import 'mocha'

describe('ceil fn', () => {
  it('ceil1', () => {
    const result = ceil(4.006)
    expect(result).to.equal(5)
  })
  it('ceil2', () => {
    const result = ceil(6.004, 2)
    expect(result).to.equal(6.01)
  })
  it('ceil3', () => {
    const result = ceil(6040, -2)
    expect(result).to.equal(6100)
  })
})