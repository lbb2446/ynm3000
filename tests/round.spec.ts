import round from '../src/round'
import { expect } from 'chai'
import 'mocha'

describe('round fn', () => {
  it('round1', () => {
    const result = round(4.006)
    expect(result).to.equal(4)
  })
  it('round2', () => {
    const result = round(4.006, 2)
    expect(result).to.equal(4.01)
  })
  it('round3', () => {
    const result = round(4060, -2)
    expect(result).to.equal(4100)
  })
})
