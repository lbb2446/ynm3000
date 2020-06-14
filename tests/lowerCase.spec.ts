import lowerCase from '../src/lowerCase'
import { expect } from 'chai'
import 'mocha'

describe('lowerCase fn', () => {
  it('lowerCase1', () => {
    const result = lowerCase('--Foo-Bar--')
    expect(result).to.equal('foo bar')
  })
  it('lowerCase2', () => {
    const result = lowerCase('fooBar')
    expect(result).to.equal('foo bar')
  })
  it('lowerCase3', () => {
    const result = lowerCase('__FOO_BAR__')
    expect(result).to.equal('foo bar')
  })
})
