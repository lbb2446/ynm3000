import gte from '../src/gte'
import { expect } from 'chai'
import 'mocha'

describe('gte fn', () => {
  it('gte1', () => {
    const result = gte(1, 2)
    expect(result).to.be.false
  })
  it('gte2', () => {
    const result = gte(2, 1)
    expect(result).to.be.true
  })
  it('gte3', () => {
    const result = gte('1', 2)
    expect(result).to.be.false
  })
  it('gte4', () => {
    const result = gte(2, 2)
    expect(result).to.be.true
  })
})
