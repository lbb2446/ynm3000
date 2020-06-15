import lt from '../src/lt'
import { expect } from 'chai'
import 'mocha'

describe('lt fn', () => {
  it('lt1', () => {
    const result = lt(1, 2)
    expect(result).to.be.true
  })
  it('lt2', () => {
    const result = lt(10, 2)
    expect(result).to.be.false
  })
  it('lt3', () => {
    const result = lt(2, 2)
    expect(result).to.be.false
  })
  it('lt4', () => {
    const result = lt('1', 2)
    expect(result).to.be.true
  })
  it('lt5', () => {
    const result = lt('1', '2')
    expect(result).to.be.true
  })
  it('lt6', () => {
    const result = lt('10', '2')
    expect(result).to.be.true
  })
})
