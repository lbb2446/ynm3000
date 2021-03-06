import methodOf from '../src/methodOf'
import { expect } from 'chai'
import 'mocha'
import times from '../src/times'
import map from '../src/map'

describe('methodOf fn', () => {
  const array = times(3, (i) => () => i)
  const object = { a: array, b: array, c: array }
  it('methodOf1', () => {
    const result = map(['a[2]', 'c[0]'], methodOf(object))
    expect(result).to.have.members([2, 0])
  })
  it('methodOf2', () => {
    const result = map(
      [
        ['a', '2'],
        ['c', '0'],
      ],
      methodOf(object)
    )
    expect(result).to.have.members([2, 0])
  })
})
