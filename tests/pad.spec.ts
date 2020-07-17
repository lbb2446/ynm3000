import pad from '../src/pad'
import { expect } from 'chai'
import 'mocha'

describe('pad fn', () => {
  it('pad1', () => {
    const result = pad('abc', 8)
    expect(result).to.equal('  abc   ')
  })
  it('pad2', () => {
    const result = pad('abc', 8, '_-')
    expect(result).to.equal('_-abc_-_')
  })
  it('pad3', () => {
    const result = pad('abc', 2)
    expect(result).to.equal('abc')
  })
})
