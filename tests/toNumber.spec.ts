import toNumber from '../src/toNumber'
import { expect } from 'chai'
import 'mocha'

describe('toNumber fn', () => {
  it('toNumber1', () => {
    const result = toNumber(3.2)
    expect(result).to.equal(3.2)
  })
  it('toNumber2', () => {
    const result = toNumber(Number.MIN_VALUE)
    expect(result).to.equal(5e-324)
  })
  it('toNumber3', () => {
    const result = toNumber(Infinity)
    expect(result).to.equal(Infinity)
  })
  it('toNumber3', () => {
    const result = toNumber('3.2')
    expect(result).to.equal(3.2)
  })
})
