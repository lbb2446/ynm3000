import defaultToAny from '../src/defaultToAny'
import { expect } from 'chai'
import 'mocha'

describe('defaultToAny fn', () => {
  it('defaultToAny1', () => {
    const result = defaultToAny(1, 10, 20)
    expect(result).to.equal(1)
  })
  it('defaultToAny2', () => {
    const result = defaultToAny(undefined, 10, 20)
    expect(result).to.equal(10)
  })
  it('defaultToAny3', () => {
    const result = defaultToAny(undefined, null, 20)
    expect(result).to.equal(20)
  })
  it('defaultToAny4', () => {
    const result = defaultToAny(undefined, null, NaN)
    expect(result!==result).to.be.true
  })
})