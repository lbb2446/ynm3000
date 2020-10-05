
import unset from '../src/unset'
import { expect } from 'chai'
import 'mocha'

describe('unset fn', () => {
  const object = { 'a': [{ 'b': { 'c': 7 } }] }
  it('unset1', () => {
    const result = unset(object, 'a[0].b.c')
    expect(result).to.be.true
  })
  it('unset2', () => {
    const result = unset(object, ['a', '0', 'b', 'c'])
    expect(result).to.be.true
  })
  it('unset3', () => {
    expect(object).to.deep.equals({ 'a': [{ 'b': {} }] })
  })
})