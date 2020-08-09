import set from '../src/set'
import { expect } from 'chai'
import 'mocha'

describe('set fn', () => {
  const object: any = { a: [{ b: { c: 3 } }] }
  it('set1', () => {
    set(object, 'a[0].b.c', 4)
    expect(object.a[0].b.c).to.equal(4)
  })
  it('set2', () => {
    set(object, ['x', '0', 'y', 'z'], 5)
    expect(object.x[0].y.z).to.equal(5)
  })
})
