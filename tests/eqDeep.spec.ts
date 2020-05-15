import eqDeep from '../src/eqDeep'
import { expect } from 'chai'
import 'mocha'

describe('eqDeep fn', () => {
  const object = { a: 1 }
  const other = { a: 1 }
  it('no eq', () => {
    const result = object === other
    expect(result).to.equal(false)
  })
  it('eqDeep', () => {
    const result = eqDeep(object, other)
    expect(result).to.equal(true)
  })
})
