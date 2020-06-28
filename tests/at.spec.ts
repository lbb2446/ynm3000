import at from '../src/at'
import { expect } from 'chai'
import 'mocha'

describe('at fn', () => {
  const object = { a: [{ b: { c: 3 } }, 4] }

  it('at 1', () => {
    const result = at(object, ['a[0].b.c', 'a[1]'])
    expect(result).to.have.deep.members([3, 4])
  })
})
