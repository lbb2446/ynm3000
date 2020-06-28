import overEvery from '../src/overEvery'
import { expect } from 'chai'
import 'mocha'

describe('overEvery fn', () => {
  const func = overEvery([Boolean, isFinite])
  it('overEvery1', () => {
    const result = func('1')
    expect(result).to.be.true
  })
  it('overEvery2', () => {
    const result = func(null)
    expect(result).to.be.false
  })
  it('overEvery3', () => {
    const result = func(0 / 0)
    expect(result).to.be.false
  })
  it('overEvery4', () => {
    const result = func(true)
    expect(result).to.be.true
  })
})
