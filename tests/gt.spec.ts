import gt from '../src/gt'
import { expect } from 'chai'
import 'mocha'

describe('gt fn', () => {
  it('gt1', () => {
    const result = gt(1, 2)
    expect(result).to.be.false
  })
  it('gt2', () => {
    const result = gt(2, 1)
    expect(result).to.be.true
  })
  it('gt3', () => {
    const result = gt('1', 2)
    expect(result).to.be.false
  })
  it('gt4', () => {
    const result = gt(2, 2)
    expect(result).to.be.false
  })
})
