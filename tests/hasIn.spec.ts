import hasIn from '../src/hasIn'
import { expect } from 'chai'
import 'mocha'

describe('hasIn fn', () => {
  let obj = { a: 1, b: Object.create({ c: 2 }) }
  let oth = { a: Object.create({ b: 2 }) }
  it('hasIn', () => {
    const result = hasIn(obj, 'a')
    expect(result).to.be.true
  })
  it('hasIn 1', () => {
    const result = hasIn(obj, 'b')
    expect(result).to.be.true
  })
  it('hasIn 2', () => {
    const result = hasIn(oth, 'b')
    expect(result).to.be.false
  })
})
