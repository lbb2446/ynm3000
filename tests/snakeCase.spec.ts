import snakeCase from '../src/snakeCase'
import { expect } from 'chai'
import 'mocha'

describe('snakeCase fn', () => {
  it('snakeCase1', () => {
    const result = snakeCase('Foo Bar')
    expect(result).to.equal('foo_bar')
  })
  it('snakeCase2', () => {
    const result = snakeCase('fooBar')
    expect(result).to.equal('foo_bar')
  })
  it('snakeCase3', () => {
    const result = snakeCase('--FOO-BAR--')
    expect(result).to.equal('foo_bar')
  })
  it('snakeCase4', () => {
    const result = snakeCase('foo2bar')
    expect(result).to.equal('foo_2_bar')
  })
})
