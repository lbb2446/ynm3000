import has from '../src/has'
import { expect } from 'chai'
import 'mocha'

describe('has fn', () => {
  let obj = {
    a: 1,
  }
  let oth = {
    a: Object.create({ b: 1 }),
  }
  let oth1 = Object.create({ a: 1 })
  it('has', () => {
    const result = has(obj, 'a')
    expect(result).to.be.true
  })
  it('has false', () => {
    const result = has(oth, 'a')
    expect(result).to.be.true
  })
  it('has false', () => {
    const result = has(oth1, 'a')
    expect(result).to.be.false
  })
})
