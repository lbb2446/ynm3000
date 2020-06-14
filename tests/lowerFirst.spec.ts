import lowerFirst from '../src/lowerFirst'
import { expect } from 'chai'
import 'mocha'

describe('lowerFirst fn', () => {
  it('lowerFirst1', () => {
    const result = lowerFirst('Fred')
    expect(result).to.equal('fred')
  })
  it('lowerFirst2', () => {
    const result = lowerFirst('FRED')
    expect(result).to.equal('fRED')
  })
})
