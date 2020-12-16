import fromEntries from '../src/fromEntries'
import { expect } from 'chai'
import 'mocha'

describe('fromEntries fn', () => {
  it('fromEntries', () => {
    const result = fromEntries([
      ['a', 1],
      ['b', 2],
    ])
    expect(result).to.have.deep.equals({ a: 1, b: 2 })
  })
})
