import escape from '../src/escape'
import { expect } from 'chai'
import 'mocha'

describe('escape fn', () => {
  it('escape', () => {
    const result = escape('a,b&c')
    expect(result).to.equal('a,b&amp;c')
  })
  it('escape1', () => {
    const result = escape('fred, barney, & pebbles')
    expect(result).to.equal('fred, barney, &amp; pebbles')
  })
})
