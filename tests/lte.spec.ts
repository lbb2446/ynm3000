import lte from '../src/lte'
import { expect } from 'chai'
import 'mocha'

describe('lte fn', () => {
  it('lte1', () => {
    const result = lte(1, 2)
    expect(result).to.be.true
  })
  it('lte2', () => {
    const result = lte(10, 2)
    expect(result).to.be.false
  })
  it('lte3', () => {
    const result = lte(2, 2)
    expect(result).to.be.true
  })
})
