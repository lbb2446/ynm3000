import isNil from '../../src/isNil'
import { expect } from 'chai'
import 'mocha'

describe('is null or undefined', () => {
  it('是null', () => {
    const result = isNil(null)
    expect(result).to.equal(true)
  })
  it('是undefiend', () => {
    const result = isNil(undefined)
    expect(result).to.equal(true)
  })
  it('是NaN', () => {
    const result = isNil(NaN)
    expect(result).to.equal(false)
  })
})
