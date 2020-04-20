import kebabCase from '../src/kebabCase'
import { expect } from 'chai'
import 'mocha'

describe('kebabCase fn', () => {
  it('kebabCase 1', () => {
    const result = kebabCase('Foo Bar')
    expect(result).to.equal('foo-bar')
  })
  it('kebabCase 2', () => {
    const result = kebabCase('fooBar')
    expect(result).to.equal('foo-bar')
  })
  it('kebabCase 3', () => {
    const result = kebabCase('__FOO_BAR__')
    expect(result).to.equal('foo-bar')
  })
})
