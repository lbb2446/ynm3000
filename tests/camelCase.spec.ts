import camelCase from '../src/camelCase'
import { expect } from 'chai'
import 'mocha'

describe('camelCase fn', () => {
  it('camelCase1', () => {
    const result = camelCase('Foo Bar')
    expect(result).to.equal('fooBar')
  })
  it('camelCase2', () => {
    const result = camelCase('--foo-bar--')
    expect(result).to.equal('fooBar')
  })
  it('camelCase3', () => {
    const result = camelCase('__FOO_BAR__')
    expect(result).to.equal('fooBar')
  })
})