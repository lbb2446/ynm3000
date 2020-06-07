import invoke from '../src/invoke'
import { expect } from 'chai'
import 'mocha'

describe('invoke fn', () => {
  const object = { a: [{ b: { c: [1, 2, 3, 4] } }] }
  it('invoke', () => {
    const result = invoke(object, 'a[0].b.c.slice', [1, 3])
    expect(result).to.have.deep.members([2, 3])
  })
})
