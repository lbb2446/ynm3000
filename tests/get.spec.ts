import get from '../src/get'
import { expect } from 'chai'
import 'mocha'

describe('get fn', () => {
  const object = { a: [{ b: { c: 3 } }] }

  it('get 1', () => {
    const result = get(object, 'a[0].b.c')
    expect(result).to.equal(3)
  })
  it('get 2', () => {
    const result = get(object, ['a', '0', 'b', 'c'])
    expect(result).to.equal(3)
  })
  it('get 3', () => {
    const result = get(object, 'a.b.c', 'default')
    expect(result).to.equal('default')
  })
})
