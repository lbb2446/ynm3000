import toSafeInteger from '../src/toSafeInteger'
import { expect } from 'chai'
import 'mocha'

describe('toSafeInteger fn', () => {
  it('toSafeInteger1', () => {
    const result = toSafeInteger(3.2)
    expect(result).to.equal(3)
  })
  it('toSafeInteger2', () => {
    const result = toSafeInteger(Number.MIN_VALUE)
    expect(result).to.equal(0)
  })
  it('toSafeInteger3', () => {
    const result = toSafeInteger(Infinity)
    expect(result).to.equal(9007199254740991)
  })
  it('toSafeInteger4', () => {
    const result = toSafeInteger('3.2')
    expect(result).to.equal(3)
  })
})
