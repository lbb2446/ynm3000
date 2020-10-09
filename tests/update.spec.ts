import update from '../src/update'
import { expect } from 'chai'
import 'mocha'

describe('update fn', () => {
  let object:any = { 'a': [{ 'b': { 'c': 3 } }] }
  it('update1', () => {
    update(object, 'a[0].b.c', n => n * n)
    expect(object.a[0].b.c).to.equal(9)
  })
  it('update2', () => {
    update(object, 'x[0].y.z', n => n ? n + 1 : 0)
    expect(object.x[0].y.z).to.equal(0)
  })
})