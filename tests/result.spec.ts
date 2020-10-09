import result from '../src/result'
import { expect } from 'chai'
import 'mocha'

describe('result fn', () => {
  const object = { a: [{ b: { c1: 3, c2: () => 4 } }] }
  it('result 1', () => {
    const _result = result(object, 'a[0].b.c1')
    expect(_result).to.equal(3)
  })
  it('result 2', () => {
    const _result = result(object, 'a[0].b.c2')
    expect(_result).to.equal(4)
  })
  it('result 3', () => {
    const _result = result(object, 'a[0].b.c3', 'default')
    expect(_result).to.equal('default')
  })
  it('result 4', () => {
    const _result = result(object, 'a[0].b.c3', () => 'default')
    expect(_result).to.equal('default')
  })
})
