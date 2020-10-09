import startsWith from '../src/startsWith'
import { expect } from 'chai'
import 'mocha'

describe('startsWith fn', () => {
  it('startsWith1', () => {
    const result = startsWith('abc', 'a')
    expect(result).to.be.true
  })
  it('startsWith2', () => {
    const result = startsWith('abc', 'b')
    expect(result).to.be.false
  })
  it('startsWith3', () => {
    const result = startsWith('abc', 'b', 1)
    expect(result).to.be.true
  })
})
