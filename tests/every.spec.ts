import every from '../src/every'
import { expect } from 'chai'
import 'mocha'

describe('every fn', () => {
  it('every false', () => {
    const result = every(['1', true, null, 1], Boolean)
    expect(result).to.be.false
  })
  it('every', () => {
    const result = every([1, 2, 3], (item) => typeof item === 'number')
    expect(result).to.be.true
  })
})
