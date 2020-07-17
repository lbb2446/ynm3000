import overSome from '../src/overSome'
import { expect } from 'chai'
import 'mocha'

describe('overSome fn', () => {
  const fn = overSome([Boolean, isFinite])
  it('overSome1', () => {
    const result = fn(1)
    expect(result).to.be.true
  })
  it('overSome2', () => {
    const result = fn(0 / 0)
    expect(result).to.be.false
  })
  it('overSome3', () => {
    const result = fn(null)
    expect(result).to.be.true
  })
})
