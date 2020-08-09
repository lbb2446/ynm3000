import sampleSize from '../src/sampleSize'
import { expect } from 'chai'
import 'mocha'

describe('sampleSize fn', () => {
  const result = sampleSize([1, 2, 3], 2)
  it('sampleSize1.1', () => {
    expect(result.length).to.equal(2)
  })
  it('sampleSize1.2', () => {
    expect([1, 2, 3]).to.include.members(result)
  })
  const result1 = sampleSize([1, 2, 3], 3)
  it('sampleSize2.1', () => {
    expect(result1.length).to.equal(3)
  })
  it('sampleSize2.2', () => {
    expect([1, 2, 3]).to.include.members(result)
  })
})
