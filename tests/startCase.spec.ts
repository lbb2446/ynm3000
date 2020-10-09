import startCase from '../src/startCase'
import { expect } from 'chai'
import 'mocha'

describe('startCase fn', () => {
  it('startCase1', () => {
    const result = startCase('--foo-bar--')
    expect(result).to.equal('Foo Bar')
  })
  it('startCase2', () => {
    const result = startCase('fooBar')
    expect(result).to.equal('Foo Bar')
  })
  it('startCase3', () => {
    const result = startCase('__FOO_BAR__')
    expect(result).to.equal('FOO BAR')
  })
})
