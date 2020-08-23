import upperFirst from '../src/upperFirst'
import { expect } from 'chai'
import 'mocha'

describe('upperFirst fn', () => {
  it('upperFirst1', () => {
    const result = upperFirst('fred')
    expect(result).to.equal('Fred')
  })
  it('upperFirst2', () => {
    const result = upperFirst('FRED')
    expect(result).to.equal('FRED')
  })
})
