import padEnd from '../src/padEnd'
import { expect } from 'chai'
import 'mocha'

describe('padEnd fn', () => {
  it('padEnd1', () => {
    const result = padEnd('abc', 6)
    expect(result).to.equal('abc   ')
  })
  it('padEnd2', () => {
    const result = padEnd('abc', 6, '_-')
    expect(result).to.equal('abc_-_')
  })
  it('padEnd3', () => {
    const result = padEnd('abc', 2)
    expect(result).to.equal('abc')
  })
})
