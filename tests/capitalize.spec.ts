import capitalize from '../src/capitalize'
import { expect } from 'chai'
import 'mocha'

describe('capitalize fn', () => {
  it('capitalize', () => {
    const result = capitalize('FRED')
    expect(result).to.equal('Fred')
  })
})