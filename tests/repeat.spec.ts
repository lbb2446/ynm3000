import repeat from '../src/repeat'
import { expect } from 'chai'
import 'mocha'

describe('repeat fn', () => {
  it('repeat1', () => {
    const result = repeat('*', 3)
    expect(result).to.equal('***')
  })
  it('repeat2', () => {
    const result = repeat('abc', 2)
    expect(result).to.equal('abcabc')
  })
  it('repeat3', () => {
    const result = repeat('abc', 0)
    expect(result).to.equal('')
  })
})
