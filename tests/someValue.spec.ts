import someValue from '../src/someValue'
import { expect } from 'chai'
import 'mocha'

describe('someValue fn', () => {
  it('someValue', () => {
    const result = someValue({ a: 0, b: 'yes', c: false }, Boolean)
    expect(result).to.be.true
  })
})
