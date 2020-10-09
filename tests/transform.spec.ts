import transform from '../src/transform'
import { expect } from 'chai'
import 'mocha'

describe('transform fn', () => {
  it('transform', () => {
    const result = transform(
      [2, 3, 4],
      (result, n) => {
        result.push((n *= n))
        return n % 2 == 0
      },
      []
    )
    expect(result).to.have.deep.members([4, 9])
  })
  it('transform', () => {
    const result = transform(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        ;(result[value] || (result[value] = [])).push(key)
      },
      {}
    )
    expect(result).to.deep.equals({ '1': ['a', 'c'], '2': ['b'] })
  })
})
