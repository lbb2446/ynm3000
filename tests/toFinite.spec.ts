import toFinite from '../src/toFinite'
import { expect } from 'chai'
import 'mocha'

describe('toFinite fn', () => {
  it('toFinite1', () => {
    const result = toFinite(3.2)
    expect(result).to.equal(3.2)
  })
  it('toFinite2', () => {
    const result = toFinite(Number.MIN_VALUE)
    expect(result).to.equal(5e-324)
  })
  it('toFinite3', () => {
    const result = toFinite(Infinity)
    expect(result).to.equal(1.7976931348623157e308)
  })
  it('toFinite4', () => {
    const result = toFinite('3.2')
    expect(result).to.equal(3.2)
  })
  it('toFinite5', () => {
    const result = toFinite(0 / 0)
    expect(result).to.equal(0)
  })
})
