import padStart from '../src/padStart'
import { expect } from 'chai'
import 'mocha'

describe('padStart fn', () => {
  it('padStart1', () => {
    const result = padStart('abc', 6)
    expect(result).to.equal('   abc')
  })
  it('padStart2', () => {
    const result = padStart('abc', 6, '_-')
    expect(result).to.equal('_-_abc')
  })
  it('padStart3', () => {
    const result = padStart('abc', 2)
    expect(result).to.equal('abc')
  })
})
