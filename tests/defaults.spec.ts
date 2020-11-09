import defaults from '../src/defaults'
import { expect } from 'chai'
import 'mocha'

describe('defaults fn', () => {
  it('defaults1', () => {
    const result = defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
    expect(result).to.deep.equals({ 'a': 1, 'b': 2 })
  })
  it('defaults2', () => {
    const result = defaults({ 'a': undefined }, { 'b': 2 }, { 'a': 3 })
    expect(result).to.deep.equals({ 'a': 3, 'b': 2 })
  })
})