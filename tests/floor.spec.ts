import floor from '../src/floor'
import { expect } from 'chai'
import 'mocha'

describe('floor fn', () => {
  it('floor1', () => {
    const result = floor(4.006)
    expect(result).to.equal(4)
  })
  it('floor2', () => {
    const result = floor(0.046, 2)
    expect(result).to.equal(0.04)
  })
  it('floor3', () => {
    const result = floor(4060, -2)
    expect(result).to.equal(4000)
  })
})
