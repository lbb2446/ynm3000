import words from '../src/words'
import { expect } from 'chai'
import 'mocha'

describe('words fn', () => {
  it('words', () => {
    const result = words('fred, barney, & pebbles')
    expect(result).to.have.deep.members(['fred', 'barney', 'pebbles'])
  })
  it('words pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g)
    expect(result).to.have.deep.members(['fred', 'barney', '&', 'pebbles'])
  })
})
