import memoize from '../src/memoize'
import values from '../src/values'
import { expect } from 'chai'
import 'mocha'

describe('memoize fn', () => {
  it('memoize 1', () => {
    const object = { a: 1, b: 2 }
    const values1 = memoize(values)
    values1(object)

    object.a = 2

    const result = values1(object)
    expect(result).to.have.deep.members([1, 2])
  })
  it('memoize 2', () => {
    const object = { a: 1, b: 2 }
    const values1 = memoize(values)

    values1.cache.set(object, ['a', 'b'])

    const result = values1(object)
    expect(result).to.have.deep.members(['a', 'b'])
  })
})
