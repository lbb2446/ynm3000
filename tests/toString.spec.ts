import toString from '../src/toString'
import { expect } from 'chai'
import 'mocha'

describe('toString fn', () => {
  it('-0', () => {
    const result = toString(-0)
    expect(result).to.equal('-0')
  })
  it('undefined', () => {
    const result = toString(undefined)
    expect(result).to.equal('')
  })
  it('null', () => {
    const result = toString(null)
    expect(result).to.equal('')
  })
  it('array', () => {
    const result = toString([1, 2, 3])
    expect(result).to.equal('1,2,3')
  })
  it('symbol', () => {
    const a = Symbol(1)
    const result = toString(a)
    expect(result).to.equal('Symbol(1)')
  })
})
