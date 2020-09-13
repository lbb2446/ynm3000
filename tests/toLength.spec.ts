import toLength from '../src/toLength'
import { expect } from 'chai'
import 'mocha'

describe('toLength fn', () => {
  it('toLength1', () => {
    const result = toLength(3.2)
    expect(result).to.equal(3)
  })
  it('toLength2', () => {
    const result = toLength(Number.MIN_VALUE)
    expect(result).to.equal(0)
  })
  it('toLength3', () => {
    const result = toLength(Infinity)
    expect(result).to.equal(4294967295)
  })
  it('toLength4', () => {
    const result = toLength('3.2')
    expect(result).to.equal(3)
  })
})
