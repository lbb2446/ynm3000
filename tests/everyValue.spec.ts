import everyValue from '../src/everyValue'
import { expect } from 'chai'
import 'mocha'

describe('everyValue fn', () => {
  it('everyValue false', () => {
    const result = everyValue({ a: 1, b: true, c: null }, Boolean)
    expect(result).to.be.false
  })
  it('everyValue', () => {
    const result = everyValue(
      { a: 1, b: 2, c: 3 },
      (num) => typeof num === 'number'
    )
    expect(result).to.be.true
  })
})
