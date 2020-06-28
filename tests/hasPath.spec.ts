import hasPath from '../src/hasPath'
import { expect } from 'chai'
import 'mocha'

describe('hasPath fn', () => {
  const obj = {
    a: {
      b: 2,
    },
  }
  const other = Object.create({ a: { b: 2 } })
  it('hasPath1', () => {
    const result = hasPath(obj, 'a.b')
    expect(result).to.be.true
  })
  it('hasPath2', () => {
    const result = hasPath(obj, ['a', 'b'])
    expect(result).to.be.true
  })
  it('hasPath3', () => {
    const result = hasPath(other, ['a'])
    expect(result).to.be.false
  })
  it('hasPath4', () => {
    const result = hasPath(other, 'a.b')
    expect(result).to.be.false
  })
})
