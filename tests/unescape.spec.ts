import unescape from '../src/unescape'
import { expect } from 'chai'
import 'mocha'

describe('unescape fn', () => {
  it('unescape', () => {
    const result = unescape('fred, barney, &amp; pebbles')
    expect(result).to.equal('fred, barney, & pebbles')
  })
})
