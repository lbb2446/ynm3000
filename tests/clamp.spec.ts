import clamp from '../src/clamp'
import { expect } from 'chai'
import 'mocha'

describe('clamp fn', () => {
  it('clamp1', () => {
    const result = clamp(-10, -5, 5)
    expect(result).to.equal(-5)
  })
  it('clamp2', () => {
    const result = clamp(10, -5, 5)
    expect(result).to.equal(5)
  })
})