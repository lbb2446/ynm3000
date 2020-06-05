import invert from '../src/invert'
import { expect } from 'chai'
import 'mocha'

describe('invert fn', () => {
  it('invert', () => {
    const result = invert({ a: 1, b: 2, c: 1 })
    expect(result).to.deep.equal({
      1: 'c',
      2: 'b',
    })
  })
})
