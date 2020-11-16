import endsWith from '../src/endsWith'
import { expect } from 'chai'
import 'mocha'

describe('endsWith fn', () => {
  it('endsWith1', () => {
    const result = endsWith('abc', 'c')
    expect(result).to.be.true
  })
  it('endsWith2', () => {
    const result = endsWith('abc', 'b')
    expect(result).to.be.false
  })
  it('endsWith3', () => {
    const result = endsWith('abc', 'b', 2)
    expect(result).to.be.true
  })
})
