import toInteger from '../src/toInteger'
import { expect } from 'chai'
import 'mocha'

describe('toInteger fn', () => {
  it('toInteger1', () => {
    const result = toInteger(3.2)
    expect(result).to.equal(3)
  })
  it('toInteger2', () => {
    const result = toInteger(Number.MIN_VALUE)
    expect(result).to.equal(0)
  })
  it('toInteger3', () => {
    const result = toInteger(Infinity)
    expect(result).to.equal(1.7976931348623157e308)
  })
  it('toInteger4', () => {
    const result = toInteger('3.2')
    expect(result).to.equal(3)
  })
  it('toInteger5', () => {
    const result = toInteger('-3.2')
    expect(result).to.equal(-3)
  })
})
