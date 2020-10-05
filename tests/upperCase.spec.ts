
import upperCase from '../src/upperCase'
import { expect } from 'chai'
import 'mocha'

describe('upperCase fn', () => {
  it('upperCase1', () => {
    const result = upperCase('--foo-bar')
    expect(result).to.equal('FOO BAR')
  })
  it('upperCase2', () => {
    const result = upperCase('fooBar')
    expect(result).to.equal('FOO BAR')
  })
  it('upperCase3', () => {
    const result = upperCase('__foo_bar__')
    expect(result).to.equal('FOO BAR')
  })
})