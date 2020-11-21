import deburr from '../src/deburr'
import { expect } from 'chai'
import 'mocha'

describe('deburr fn', () => {
  it('deburr', () => {
    const result = deburr('déjà vu')
    expect(result).to.equal('deja vu')
  })
})